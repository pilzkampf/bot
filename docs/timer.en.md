# Timer

With the `/timer` command, you can have a timed notification sent to you.

## Timer without parameters

If you only enter `/timer`, you will receive a list of active timers. Please note that the list does not update automatically.
If there are no active timers, a short help text will be displayed.

## Timer as a reply

You can also use the command as a reply to a mushroom message. If you are participating in this mushroom, the timer will automatically
be set to the end time of the mushroom battle, and you will receive a notification when the mushroom battle is completed.

## Timer with parameters

Of course, you can also set a timer for all sorts of things: Your Pikmin Bloom expedition, the washing machine, or just as a reminder.

| Command | Effect |
|----------|---------|
|`/timer`  | Shows either the list of active timers or a help text. In the list, you can delete individual timers. |
|`/timer 30` or `/timer 30m` | You set a timer for 30 minutes. You can also do this as a reply to a mushroom message if you want to be reminded earlier. The timer's time will then ***not adjust to the remaining time***. |
|`/timer 1:20 "Expedition"` | You can give the timer its own comment text. This can help you distinguish between different timers. The comment must be in quotation marks. These characters are recognized as quotation marks: `„“”«»‘''"` |

You can set the timer's time in days (d), hours (h), and minutes (m), or you can use a colon to separate the values.