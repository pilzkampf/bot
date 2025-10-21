// font-toggle-debug.js
console.log("FONT-DEBUG: script loaded");

(function() {
  const storageKey = "fontSizeMode";
  const levels = ["font-normal", "font-large", "font-xlarge"];

  // kleine Helfer
  function safeLog(...args) { console.log("FONT-DEBUG:", ...args); }
  function createButton() {
    const btn = document.createElement("button");
    btn.className = "md-header__button md-icon font-toggle";
    btn.type = "button";
    btn.title = "Toggle font size";
    // Material-like icon (simple SVG)
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M9 4v3h5v12h3V7h5V4H9zM4 8v12h3v-5h3v-3H7V8H4z"/></svg>';
    return btn;
  }

  function applyStored() {
    const cur = localStorage.getItem(storageKey) || "font-normal";
    safeLog("applyStored:", cur);
    document.documentElement.classList.remove(...levels);
    document.documentElement.classList.add(cur);
  }

  function attachButtonIfPossible() {
    // mehrere mögliche Header-Selektoren prüfen
    const selectors = [
      ".md-header__option",      // häufig
      ".md-header-nav",          // alternative
      ".md-header",              // fallback
      "header"                   // grober fallback
    ];
    safeLog("Looking for header via selectors", selectors);
    for (const sel of selectors) {
      const node = document.querySelector(sel);
      safeLog("Checking selector", sel, "->", !!node);
      if (node) {
        // Wir versuchen erst, das Element direkt anzuhängen
        try {
          const btn = createButton();
          btn.addEventListener("click", () => {
            const curClass = document.documentElement.className.match(/font-\w+/)?.[0] || "font-normal";
            const next = levels[(levels.indexOf(curClass) + 1) % levels.length];
            safeLog("Button clicked. switching", curClass, "->", next);
            document.documentElement.classList.remove(...levels);
            document.documentElement.classList.add(next);
            localStorage.setItem(storageKey, next);
          });
          // wenn node ist .md-header__option (ein Button-Container), wir fügen davor
          if (node.classList && node.classList.contains("md-header__option")) {
            node.parentNode.insertBefore(btn, node);
          } else {
            // sonst einfach append, damit sichtbar
            node.appendChild(btn);
          }
          safeLog("Button inserted into", sel);
          return true;
        } catch (e) {
          console.error("FONT-DEBUG: error inserting button", e);
        }
      }
    }
    return false;
  }

  function observeHeaderAndAttach() {
    safeLog("Setting up MutationObserver for <body>");
    const mo = new MutationObserver((mutations, obs) => {
      safeLog("MutationObserver fired");
      if (attachButtonIfPossible()) {
        safeLog("Button attached via MutationObserver. disconnecting observer.");
        obs.disconnect();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  // Start: apply stored size immediately
  try {
    applyStored();
  } catch (e) { console.error("FONT-DEBUG applyStored error", e); }

  // Versuche sofort anzuhängen
  const ok = attachButtonIfPossible();
  safeLog("Immediate attach attempt result:", ok);
  if (!ok) {
    // fallback: MutationObserver, plus endgültiger timeout retry
    observeHeaderAndAttach();
    setTimeout(() => {
      safeLog("Final timed retry for attach");
      attachButtonIfPossible();
    }, 2000);
  }

})();
