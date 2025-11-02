# Pilzkampf beitreten

Einem Pilzkampf beizutreten ist so einfach wie einen Knopf zu drücken. Es gibt im Prinzip zwei Wege:

* Über die Pilznachricht in der Gruppe
* Über den [Pilz-Alarm](alarm.md)

## Pilznachricht in der Gruppe
Es gibt zwei Knöpfe, die für dich wichtig sind: ":thumbsup:&nbsp;dabei" zum Teilnehmen und ":thumbsdown:&nbsp;bin raus" wenn du dich aus dem Pilzkampf zurückziehst.
In der Pilznachricht kannst du sehen...

* wer den Pilz erstellt hat
* bis wann der Pilz (etwa)[^Restzeit] bekämpft ist
* wer sich bereits zum Pilz angemeldet hat
* wie viele Plätze ohne oder mit Ticket noch verfügbar sind

Der Knopf "konfigurieren" ist wichtig für den Pilz-Ersteller, der dann einen [Pilz konfigurieren](offer-mushroom.md#pilz-konfigurieren) kann.

![Pilzkampf-Nachricht](assets/screenshot/groupmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Pilzkampf-Nachricht</em></p>

### Externe Spieler anmelden

Mit dem Kommando `/mit` und `/ohne` kannst du externe Spieler zum Pilz anmelden bzw. wieder abmelden. Wenn du das Kommando `/mit (Spielernamen)` _**als
Antwort auf eine Pilznachricht**_ in der Gruppe schreibst, wird dieser Spieler über deinen Namen am Pilz gemeldet. Zum Beispiel

    wishmaster (via AliceBruno)

In diesem Beispiel hat *AliceBruno* den Spieler *wishmaster* zum Pilz angemeldet. Beachte bitte, dass der Austausch vom Freundescode jetzt in deiner
Verantwortung liegt, da der Bot den Code des externen Spielers nicht kennen kann. Diese Funktion kann hilfreich sein, wenn dein Partner auch
Pikmin Bloom spielt aber keinen Telegram-Account hat oder du deinen zweiten Account zu einem Pilz anmelden möchtest.

Um die Anmeldung wieder rückgängig zu machen, verwendest du **als Antwort auf die Pilznachricht** `/ohne (Spielernamen)`. Beachte bitte, dass du den
selben Spielernamen verwendest.

## Pilz-Alarm

![Pilz-Alarm](assets/screenshot/mushroom-alert.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Pilz-Alarm</em></p>

Wenn du einen Pilz-Alarm bekommst, ist es sehr einfach, diesem Pilz schnell beizutreten. Drücke einfach auf ":thumbsup:&nbsp;dabei" und du wirst sehr bald eingeladen.
Bei besonders gewünschten Pilzen kann es vorkommen, dass der letzte freie Platz gerade schon besetzt wurde. In diesem Fall erhältst du eine entsprechende
Mitteilung.

Bist du gerade beschäftigt oder an diesem Pilz nicht interessiert, drücke auf "ignorieren". Oder wenn du kein Interesse mehr an dieser Art von Pilzen hast,
kannst du "Alarm löschen" drücken. Wenn du diesen Pilz-Alarm oder einen anderen einstellen möchtest, musst du mit dem Kommando `/alarm` einen neuen
Pilz-Alarm einrichten.

Mit der Funktion "stumm bis morgen" werden deine Pilz-Alarme bis morgen früh stumm gestellt. Die Uhrzeit kannst du in [den Einstellungen](userconfig.md) mit
dem Kommando `/userconfig` einrichten. Standardmäßig ist es 7 Uhr am nächsten Morgen.

!!! warning ""

    Die Funktion "stumm bis morgen" steht nur Unterstützern zur Verfügung. Wenn du auch Unterstüter vom Pilzkampf-Bot werden möchtest,
    [schaue bitte hier](support.md).

Wenn du "Alarme stummstellen" einstellst, werden alle Pilz-Alarme bis auf weiteres deaktiviert. Sie bleiben immer noch gespeichert aber du erhältst keine
Benachrichtigungen mehr. Die Benachrichtigungen kannst du in [den Einstellungen](userconfig.md) mit dem Kommando `/userconfig` aktivieren und deaktivieren.

[^Restzeit]:
    Wenn keine Restzeit manuell eingegeben wurde, wird die Zeit mit "(ca.)" angegeben. Sobald die Restzeit einmal manuell eingetragen wurde, verschwindet
    das "(ca.)". Denn noch wird beim nächsten Spieler eine geschätze Zeit von der Restzeit abgezogen. Daher musst du möglicherweise mehrfach die Restzeit
    ändern. Oder du behältst die Schätzung bei. Ganz deine Sache, kein Stress!