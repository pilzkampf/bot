# Pilzkampf erstellen

Mit dem Kommando `/pilz` kannst du einen neuen Pilzkampf oder eine Wochenherausforderung (Laufen oder Pflanzen) erstellen. Du wirst dabei nach folgenden Angaben gefragt:

* Größe
* Farbe
* Anzahl der Plätze

Die Restzeit des Pilzes wird basierend auf deinem Level, der Größe und der Farbe geschätzt. Dein Level kannst du im [Benutzerprofil](profile.md) einstellen. In den [Einstellungen](userconfig.md) kannst du außerdem festlegen, ob du zusätzlich nach folgenden Angaben gefragt wirst:

* Restzeit des Pilzes
* Kommentar

??? tip "Profi-Tipp"

    Du kannst einen Pilz auch schneller erstellen, indem du alle Informationen direkt hinter das `/pilz`-Kommando schreibst. Wenn du eine Restzeit angeben möchtest, setze sie zwischen zwei :fontawesome-solid-dollar:-Zeichen. Einen Kommentar setzt du in Anführungszeichen. Beispiele:

    * `/pilz normaler Event-Pilz mit vier freien Plätzen`
    * `/pilz Großer Wasserpilz mit Ticket $1h30m$`
    * `/pilz riesiger Event 1 Platz frei $2h12m$ "Bitte mit A-Team und schnell sein"`

    Wenn der Bot die Angaben nicht eindeutig versteht, wirst du im Dialog nach den Informationen gefragt.

## Pilznachricht

Nachdem du einen Pilz erstellt hast, wird eine Nachricht in der Gruppe veröffentlicht. Zusätzlich erscheint in deinem Bot-Chat eine etwas kürzere Pilznachricht mit den aktuellen Teilnehmern. Hinter den Spielernamen werden verschiedene Emoji angezeigt.  
[Mehr Informationen zu den Emoji](battle.md#emoji).

![Pilzkampf-Nachricht im Bot-Chat](assets/screenshot/chatmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Pilzkampf-Nachricht im Bot-Chat</em></p>

--8<-- "emoji.de.md:message"

--8<-- "emoji.de.md:medal"

## Spieler-Anmeldung annehmen

Wenn Spieler Interesse an deinem Pilz zeigen, erhältst du eine Benachrichtigung. Du kannst dann mit drei Knöpfen reagieren:

### 📣 ist eingeladen

Wenn du mit dem Spieler bereits in Pikmin Bloom befreundet bist, kannst du ihn einladen. Danach drückst du auf den Knopf im Bot. Der Spieler wird ebenfalls über die Einladung informiert.

### ❌ ablehnen

Manchmal ist es notwendig, eine Bewerbung abzulehnen. Dafür gibt es drei Gründe:

* Es sind nur noch Ticket-Plätze verfügbar
* Der Pilz wurde bereits bekämpft
* Sonstiges

Bitte informiere den Spieler kurz, um Missverständnisse zu vermeiden. Wenn nur noch Ticket-Plätze vorhanden sind, werden freie Plätze automatisch entfernt. Wurde der Pilz bereits bekämpft, wird er als beendet markiert.

### 🤝 Freundescode

Wenn ihr in Pikmin Bloom noch nicht befreundet seid, kannst du mit diesem Knopf Freundescodes austauschen. Sobald einer von euch einen Freundescode hinterlegt hat, wird er automatisch übermittelt. Du bekommst eine Nachricht, wenn die Freundschaftsanfrage gesendet wurde.

## Pilz konfigurieren

In der Pilz-Konfiguration kannst du dein Angebot nachträglich bearbeiten – zum Beispiel, wenn sich freie Plätze oder die Restzeit geändert haben.

![Pilz konfigurieren](assets/screenshot/mushroom-config.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Pilz konfigurieren</em></p>

### Angebot löschen

Wenn du einen falschen oder unpassenden Pilz erstellt hast, kannst du ihn innerhalb von 30 Minuten wieder löschen.

### Einladung zurücknehmen

Wenn sich jemand beworben hat, aber nicht beigetreten ist, kannst du die Einladung zurücknehmen und den Platz wieder freigeben.

### Plätze hinzufügen oder entfernen

Falls Plätze durch externe Spieler belegt wurden, kannst du diese entfernen oder zusätzliche Plätze hinzufügen. Sobald keine freien Plätze mehr vorhanden sind, wird der Pilz automatisch auf „mit Ticket“ umgestellt. Der Bot berücksichtigt dabei, dass du maximal 10 Einladungen versenden kannst.

### Mit Ticket / Ohne Ticket umschalten

Wenn du auf „Mit Ticket umschalten“ klickst, werden alle freien Plätze entfernt und nur Ticket-Plätze bleiben. Wenn der Pilz bereits auf Ticket steht, kannst du wieder auf „Ohne Ticket“ wechseln. Dann wird ein freier Platz erstellt und du kannst weitere hinzufügen.

### Kommentar

Du kannst jederzeit einen Kommentar zu deiner Pilznachricht hinzufügen. Hier kannst du z.<nbsp/>B. erwähnen, dass lokale Spieler erwartet werden oder du dir besonders starke Teams wünschst.

### Restzeit

Wenn du keine Restzeit angegeben hast, wird eine geschätzte Restzeit vom Bot berechnet – immer etwas länger als die tatsächliche Zeit, um sicherzustellen, dass das Angebot nicht zu früh endet. Wenn du eine Restzeit manuell einträgst, wird die Schätzung dadurch genauer.

Die Restzeit kannst du mit Kürzeln für Tage (d), Stunden (h) und Minuten (m) angeben oder im Format mit Doppelpunkten `:`:

| Eingabe | Restzeit |
| ------: | :------- |
| 1h 30m  | 90 Minuten |
| 20      | 20 Minuten |
| 1:0:20  | Ein Tag und 20 Minuten |
| 1d 30m  | Ein Tag und 30 Minuten |

!!! warning ""

    Die Reihenfolge von **d, h, m** muss immer eingehalten werden – sonst kann die Zeitangabe nicht richtig erkannt werden!

??? info "Restzeit-Berechnung"

    Bei einem neuen Pilz wird die Restzeit anhand deines Levels, der Größe und des Typs geschätzt. Bei Event-Pilzen geht der Bot davon aus, dass deine Stärke im Laufe des Events steigt. Für jeden eingeladenen Spieler wird anteilig Zeit abgezogen – auch dann, wenn der Spieler noch nicht aktiv am Kampf teilnimmt. Wird ein Spieler entfernt, wird die Restzeit wieder anteilig erhöht.

    Wenn du möchtest, dass die Restzeit **exakt** angezeigt wird, solltest du sie manuell eintragen. Das ist auch sinnvoll, wenn du einen `/timer` nutzt, [um erinnert zu werden](timer.md), sobald der Pilz abläuft.

### Fertig

Damit beendest du den Dialog. Alle Änderungen, die du vorher vorgenommen hast, wurden jedoch bereits gespeichert und wirken sich sofort aus. „Fertig“ schließt nur den Dialog.
