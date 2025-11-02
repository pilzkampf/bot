# Willkommen beim Pilzkampf-Bot

Der **Pilzkampf-Bot** auf Telegram hilft dir dabei, Mitspieler für **Pikmin Bloom** zu finden.
Du erreichst ihn direkt unter [https://t.me/pikminpilz_bot](https://t.me/pikminpilz_bot).

!!! info "Vorteile des Pilzkampf-Bots"

    - Du erhältst **automatisch die Freundescodes** anderer Mitspieler.
    - Alle Teilnehmer sehen, **wie viel Zeit im Pilzkampf noch bleibt** und **wer bereits dabei ist**.
    - Du kannst dich **benachrichtigen lassen**, wenn ein passender Pilzkampf stattfindet.

??? info "Datenschutz"

    Der Bot liest **keine privaten Nachrichten**, da der *Privacy Mode* aktiviert ist.
    Er reagiert nur auf spezielle Kommandos oder auf Nachrichten, die direkt an ihn gerichtet sind.
    Mehr Informationen findest du unter [Datenschutz](privacy.md).

!!! note "Letzte Aktualisierung: 2. November 2025"

    Der Bot wird ständig weiter entwickelt. Diese Dokumentation kann leicht veraltet sein. Prüfe die
    Version vom Bot, indem du das Kommando `/userconfig` eingibst. Dort siehst du die Version mit
    Jahreszahl, Monat und Tag der letzten Aktualisierung. Wir versuchen die Dokumentation aktuell zu
    halten, du kannst gerne [mithelfen](support.md)

## Erste Schritte

Klicke auf den oben genannten Link oder suche in Telegram nach **„Pilzkampf Bot“**.
Wenn du den Bot zum ersten Mal öffnest, drücke unten auf den großen **START-Knopf**.
Dadurch wird der Bot aktiviert und darf dir Nachrichten senden.

Anschließend erhältst du eine kurze Einführung, in der erklärt wird,
wie du deinen **Pikmin Bloom-Spielernamen** registrierst.
Zusätzlich kannst du dein **Level** und deinen **Freundescode** hinterlegen.

!!! info "Level und Freundescode"

    - Dein Level hilft, die **verbleibende Zeit im Pilzkampf** zu schätzen, wenn du einen Kampf startest.
      Wenn du kein Level angibst, wird standardmäßig **Level 60** angenommen.
      Du kannst dein Level auch vor anderen Spielern **verbergen**, siehe [Profileinstellungen](profile.md).

    - Dein Freundescode wird **automatisch übermittelt**, wenn du mit jemandem spielst,
      mit dem du noch nicht in Pikmin Bloom befreundet bist.
      Mehr dazu findest du unter [Pilzkampf teilnehmen](battle.md).

Um Missbrauch zu vermeiden, solltest du dich **verifizieren**.
Dazu bekommst du einen Freundescode, über den du dich mit dem Bot verbindest.
Wenn du noch in keiner Telegram-Gruppe bist, in der der Bot aktiv ist,
wirst du automatisch zu einer passenden Gruppe eingeladen.

!!! info "Pilzkampf-Gruppen"

    Der Bot ist nur ein Werkzeug – **die Gemeinschaft macht den Unterschied**.
    Am meisten Spaß hast du, wenn du den Bot **gemeinsam mit anderen in einer Pilzkampf-Gruppe** nutzt.

## Wichtige Kommandos

Alle Kommandos beginnen mit einem Schrägstrich **„/“**.
Die wichtigsten Befehle für den Einstieg sind:

* `/pilz` – Erstellt [einen neuen Pilzkampf](offer-mushroom.md)
* `/active` – Zeigt alle [aktiven Pilzkämpfe](active.md)
* `/alarm` – [Stellt eine Benachrichtigung](alarm.md) für bestimmte Pilzarten oder Uhrzeiten ein

Viele Kommandos findest du auch direkt im **Menü** unten links (im privaten Chat)
oder unten rechts in der **Pilzkampf-Gruppe** :material-slash-forward-box:.

Einige Befehle werden dort nicht sofort angezeigt.
Eine vollständige Übersicht findest du unter [Kommandos](commands.md).
Das Kommando-Menü kannst du in deinen [Profileinstellungen](profile.md#menu) anpassen.

## Nächste Schritte

Wenn du gleich loslegen möchtest, lies weiter unter
[**Pilzkampf teilnehmen**](battle.md). 
Dort erfährst du, wie du einem laufenden Pilzkampf beitrittst oder [selbst einen startest](offer-mushroom.md).

Eine Übersicht aller Funktionen findest du unter [Kommandos](commands.md).

Der Bot kann dich nicht nur beim Pilzkampf unterstützen:  
Er erinnert dich auch an **monatliche Events**, 
oder kann **[Timer setzen](timer.md)**, wenn ein Pilzkampf abläuft oder eine Expedition endet.

Wenn du Fragen oder Ideen hast, besuche gerne die **Hilfsgruppe** des Bots –  
dort bekommst du schnell Unterstützung.

!!! warning "Häufige Probleme"

    Manchmal verzögert Telegram die Zustellung von Nachrichten oder der Bot reagiert langsamer als gewohnt.  
    Wir arbeiten ständig daran, die Geschwindigkeit zu verbessern.

    Wenn der Bot dich nach einer **Text-Eingabe** fragt, wird im Hintergrund eine **Session** gestartet.  
    Läuft diese nach etwa **90 Sekunden** ab, kann es zu Problemen kommen.  
    In diesem Fall verwende bitte das Kommando **`/cancel`** und versuche es erneut.
