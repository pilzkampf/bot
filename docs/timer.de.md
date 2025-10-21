# Timer

Mit dem Kommando `/timer` kannst du dir eine zeitgesteuerte Benachrichtigung zusenden lassen.

## Timer ohne Parameter

Wenn du nur `/timer` eingibst, erhältst du eine Liste der aktiven Timer. Bitte beachte, dass sich die Liste nicht automatisch aktualisiert.
Wenn es keine aktiven Timer gibt, wird dir ein kurzer Hilfetext angezeigt.

## Timer als Antwort

Du kannst das Kommando auch als Antwort auf eine Pilznachricht verwenden. Wenn du an diesem Pilz beteiligt bist, wird der Timer automatisch
auf die Endzeit des Pilzkampfes gesetzt und du erhältst eine Benachrichtigung, wenn der Pilzkampf abgeschlossen ist.

## Timer mit Parametern

Natürlich kannst du auch einen Timer für alles Mögliche stellen: Deine Pikmin Bloom Expedition, die Waschmaschine oder einfach nur als Erinnerung.

| Kommando | Wirkung |
|----------|---------|
|`/timer`  | Zeigt entweder die Liste der aktiven Timer oder einen Hilfetext. In der Liste kannst du einzelne Timer löschen. |
|`/timer 30` oder `/timer 30m` | Du stellst einen Timer für 30 Minuten. Das kannst du auch als Antwort auf eine Pilznachricht machen, wenn du früher erinnert werden möchtest. Die Zeit des Timers passt sich dann ***nicht der Restzeit an***. |
|`/timer 1:20 "Expedition"` | Du kannst dem Timer einen eigenen Kommentartext geben. Das kann dir helfen, die unterschiedlichen Timer zu unterscheiden. Der Kommentar muss in Anführungszeichen stehen. Diese Zeichen werden als Anführungszeichen erkannt: `„“”«»‘''"` |

Die Zeit für den Timer kannst du in Tagen (d), Stunden (h) und Minuten (m) angeben, oder du verwendest einen Doppelpunkt zur Trennung.