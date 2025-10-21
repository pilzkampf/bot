# Creating a Mushroom Battle

With the command `/pilz`, you can create a new mushroom battle or a weekly challenge (walking or planting). You will be asked for the following information:

* Size
* Color
* Number of slots

The remaining time of the mushroom is estimated based on its size, color and your level. You can set your level in the [user profile](profile.md). In the [settings](userconfig.md), you can also enable additional questions for:

* Remaining time
* Comment

??? tip "Pro tip"

    You can create a mushroom battle even faster by adding all necessary information directly after the `/pilz` command. If you want to specify the remaining time, put it between two :fontawesome-solid-dollar: symbols. Comments go in quotation marks. Examples:

    * `/pilz normal event mushroom with four free slots`
    * `/pilz large water mushroom with ticket $1h30m$`
    * `/pilz giant event 1 slot free $2h12m$ "Please use A-team and be quick"`

    If the bot cannot clearly understand what you mean, it will ask for the details in a dialog.

## Mushroom Message

After creating a mushroom battle, a message is posted in the group. You will also receive a slightly shorter mushroom message in your bot chat, showing the current participants. Different emoji appear next to the players’ names.  
[More about the emoji](battle.md#emoji).

![Mushroom message in bot chat](assets/screenshot/chatmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Mushroom message in bot chat</em></p>

--8<-- "emoji.en.md:message"

--8<-- "emoji.en.md:medal"

## Accepting Player Requests

When a player wants to join your mushroom, you will receive a notification. You can respond with three buttons:

### 📣 Invite sent

If you are already friends in Pikmin Bloom, you can send an in-game invite. Afterwards, press the button in the bot. The player will then be notified by the bot as well.

### ❌ Decline

Sometimes it is necessary to decline a request. You can choose between:

* Only ticket slots left
* The mushroom has already been completed
* Other reasons

Please inform the player briefly to avoid misunderstandings. If only ticket slots are left, any unassigned free slots are removed automatically. If the mushroom was already completed, it is marked as finished.

### 🤝 Friend code

If you are not friends yet in Pikmin Bloom, you can exchange friend codes using this button. As long as either you or the other player has a friend code saved, it will be shared automatically. You will be notified once the friend request has been sent.

## Configure Mushroom

In the mushroom configuration, you can adjust your offer afterwards – for example, if available slots or remaining time have changed.

![Configure mushroom](assets/screenshot/mushroom-config.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Configure mushroom</em></p>

### Delete offer

If you notice that the mushroom you created is incorrect or no longer valid, you can delete it within the first 30 minutes.

### Withdraw invitation

If someone applied to your mushroom but did not join, you can withdraw the invitation and free up the slot again.

### Add or remove slots

If slots were unexpectedly taken by outside players, you can remove them or add more slots. Once all free slots are removed, the mushroom is automatically set to “ticket only”. The bot keeps in mind that you can send at most 10 invitations and calculates slots based on existing applications and invitations.

### Switch to ticket / switch to no ticket

If you enable “with ticket”, all free slots are removed and only ticket slots remain. If it is already set to ticket only, you can switch to “without ticket”. In this case, one free slot is added, and you may add more.

### Comment

You can add or update a comment for your mushroom message at any time. For example, you can warn that local players might join, or ask others to use their strongest teams.

### Remaining time

If no remaining time was specified, the bot will estimate it. This estimate is always slightly longer than the actual time, to make sure the offer does not expire too early. If you manually set a remaining time, the estimate becomes more accurate.

You can enter the remaining time using abbreviations for days (d), hours (h), and minutes (m), or with colons `:`:

| Input  | Remaining time |
| ------:| :-------------- |
| 1h 30m | 90 minutes |
| 20     | 20 minutes |
| 1:0:20 | 1 day and 20 minutes |
| 1d 30m | 1 day and 30 minutes |

!!! warning ""

    Make sure to always keep the order **d, h, m**. Otherwise, the input cannot be interpreted correctly.

??? info "How remaining time is calculated"

    When you create a new mushroom, the remaining time is estimated based on mushroom type, size and your level. For event mushrooms, the bot assumes your strength increases throughout the event. For every player you invite, a portion of time is deducted – even if the player has not yet joined in-game. If a player is removed, the remaining time is added back accordingly.

    If you want the remaining time to be shown **exactly**, you should set it manually in the configuration. This is also useful if you want to use `/timer` [to get notified](timer.md) when the mushroom expires.

### Done

This closes the dialog. All changes you made earlier were already saved and take effect immediately. “Done” only closes the configuration window.
