import json
import os
import logging
from bot_variables import *

# VERSION 2026-05-21
# In-memory cache for all loaded languages
_cache = {}
_timezone_cache = {}
_flower_cache = {}  # Cache for the outsourced flower data
logger = logging.getLogger(f"{VERSION}.{BUILT}.translator")

def load_language(lang='tr', force_reload=False):
    """Load a translation JSON file into memory, cached."""
    if lang in _cache and not force_reload:
        return _cache[lang]

    path = os.path.join('locales', f'{lang}.json')
    try:
        with open(path, 'r', encoding='utf-8') as f:
            _cache[lang] = json.load(f)
            
            # Load timezone data if it exists
            load_timezone_data(lang, force_reload)
            
            # Load external flower data if it exists
            load_flower_data(lang, force_reload)
            
            return _cache[lang]
    except FileNotFoundError:
        logger.error(f"[Translator] Language file not found: {lang}.json")
        _cache[lang] = {}  # fallback to empty
        
        # Still try to attach empty structures so downstream logic doesn't crash
        load_timezone_data(lang, force_reload)
        load_flower_data(lang, force_reload)
        
        return _cache[lang]

def load_timezone_data(lang='tr', force_reload=False):
    """Load timezone data from external file, cached."""
    if lang in _timezone_cache and not force_reload:
        return _timezone_cache[lang]

    timezone_path = os.path.join('locales', f'timezones.{lang}.json')
    try:
        with open(timezone_path, 'r', encoding='utf-8') as f:
            timezone_data = json.load(f)
            _timezone_cache[lang] = timezone_data
            
            # Merge timezone data into main cache for backward compatibility
            if 'grammar' not in _cache[lang]:
                _cache[lang]['grammar'] = {}
            _cache[lang]['grammar']['timezone'] = timezone_data.get('timezone', {})
            
            return _timezone_cache[lang]
    except FileNotFoundError:
        logger.error(f"[Translator] Timezone file not found: timezones.{lang}.json")
        _timezone_cache[lang] = {'timezone': {}}
        
        if 'grammar' not in _cache[lang]:
            _cache[lang]['grammar'] = {}
        _cache[lang]['grammar']['timezone'] = {}
        
        return _timezone_cache[lang]

def load_flower_data(lang='tr', force_reload=False):
    """Load flower data from external file, cached."""
    if lang in _flower_cache and not force_reload:
        return _flower_cache[lang]

    flower_path = os.path.join('locales', f'flowers.{lang}.json')
    try:
        with open(flower_path, 'r', encoding='utf-8') as f:
            raw_data = json.load(f)
            _flower_cache[lang] = raw_data
            
            # FIX: If the JSON root contains a "flowers" key, extract its contents.
            # Otherwise, use the raw dictionary root directly.
            flower_content = raw_data.get('flowers', raw_data) if isinstance(raw_data, dict) else raw_data
            
            # Merge normalized flower data back into the main cache root safely
            _cache[lang]['flowers'] = flower_content
            
            return _flower_cache[lang]
    except FileNotFoundError:
        logger.error(f"[Translator] Flower file not found: flowers.{lang}.json")
        _flower_cache[lang] = {}
        _cache[lang]['flowers'] = {}
        return _flower_cache[lang]

def t(key_path, lang='tr', **kwargs):
    data = load_language(lang)
    
    # Get the template string
    parts = key_path.split('.')
    template = data
    for part in parts:
        if isinstance(template, dict):
            template = template.get(part)
        else:
            template = None
            break
    
    if not isinstance(template, str):
        return f"[Missing: {key_path}]"
    
    # Pre-resolve all special components
    resolved = {}
    for key, value in kwargs.items():
        # Handle grammar components (size/color/status/timezone)
        if key in ['size', 'color', 'status', 'timezone']:
            grammar_path = f"grammar.{key}.{value}"
            grammar_data = data
            for part in grammar_path.split('.'):
                if isinstance(grammar_data, dict):
                    grammar_data = grammar_data.get(part)
                else:
                    grammar_data = None
                    break
            
            if isinstance(grammar_data, dict):
                for prop, val in grammar_data.items():
                    resolved[f"{key}_{prop}"] = val
        
        # Handle event flower components
        elif key == 'flower':
            flower_data = data.get('flowers', {}).get(value, {})
            if isinstance(flower_data, dict):
                for prop, val in flower_data.items():
                    resolved[f"flower_{prop}"] = val
        
        # Regular values
        else:
            resolved[key] = value
    
    return template.format(**resolved)

def get_timezone_long_name(tz_short, lang='tr'):
    """Convenience function to get timezone long name directly."""
    data = load_language(lang)
    tz_data = data.get('grammar', {}).get('timezone', {}).get(tz_short, {})
    return tz_data.get('long', f"[Missing: {tz_short}]")