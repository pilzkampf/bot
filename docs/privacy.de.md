# Datenschutz

Für die Bereitstellung des Dienstes muss der Bot auf einige Daten zugreifen und diese speichern. Alle Daten werden auf einem Server in Deutschland verarbeitet; keine dieser Daten werden mit anderen Personen oder Parteien ausgetauscht. Der einzige Zweck der Daten ist die Erbringung des Services "Pilzkampf-Bot". Es gelten darüber hinaus die [Datenschutzbedingungen von Telegram](https://telegram.org/privacy/de), auf die wir keinen Einfluss haben.

## Dauerhafte Daten

Solange du den Bot nutzt, werden folgende Daten dauerhaft gespeichert:

| Daten | Grund |
|-------|-------|
| Spielername, Level, Freundescode | Diese Daten werden vom Nutzer angegeben und sind wichtig für die Kommunikation zwischen Spielern und die Einschätzung des Pilzkampfes. Level und Freundescode sind optionale Daten und können frei gelassen werden. Alle diese Daten können jederzeit vom Nutzer geändert werden. |
| Telegram-ID, Anzeigename, Benutzername | Diese Daten stellt Telegram zur Verfügung. Der Spieler kann jederzeit seinen Anzeigenamen und Benutzernamen bei Telegram ändern. Die eindeutige Telegram-ID ist notwendig, um Spieler eindeutig zuordnen zu können, wenn sich der Name ändert. |
| Zeitzone, Sprache | Der Nutzer kann Sprache und Zeitzone selbst einstellen. Wenn keine Sprache und Zeitzone eingestellt wurde, wird ein Standardwert gesetzt. Diese Daten sind wichtig, um die Nachrichten an den Benutzer zu personalisieren und Zeiten entsprechend seiner lokalen Uhrzeit anzuzeigen. |
| Datum der Registrierung und Datum der letzten Aktivität | Diese Daten sind wichtig, um den Service des Bots zu verbessern und Spieler zu erkennen, die den Bot nicht mehr nutzen oder nie genutzt haben. |

## Temporäre Daten

Der Pilzkampf-Bot schreibt ein Logfile und protokolliert für den Entwickler die Aktivität des Bots. Anhand des Logfiles können Probleme und Fehler des Bots analysiert werden, wodurch der Dienst regelmäßig und dauerhaft verbessert wird. Logfiles werden nach sieben Tagen dauerhaft gelöscht.

Mit dem [Kommando `/logfile`](commands.md#administratoren-kommandos) haben Administratoren auch die Möglichkeit, Probleme bei einem einzelnen Pilzkampf schnell zu erkennen. Diese Daten stehen nur Administratoren und Entwicklern zur Verfügung.