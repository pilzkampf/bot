# Join a Mushroom Battle

Joining a mushroom battle is as simple as pressing a button. There are basically two ways:

* Via the mushroom message in the group
* Via the [Mushroom Alert](alarm.md)

## Mushroom message in the group
There are two buttons that are important for you: ":thumbsup:&nbsp;I'm in" to participate and ":thumbsdown:&nbsp;I'm out" if you want to withdraw from the mushroom battle.  
In the mushroom message you can see...

* who created the mushroom
* until when the mushroom is (approximately)[^1] completed
* who has already signed up for the mushroom
* how many free or ticketed slots are still available

The "configure" button is important for the mushroom creator, who can then [configure a mushroom](offer-mushroom.md#configure-mushroom).

![Mushroom message](assets/screenshot/groupmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Mushroom message</em></p>

### Register external players

Using the commands `/mit` and `/ohne`, you can register or unregister external players for the mushroom.  
If you write the command `/mit (playername)` _**as a reply to a mushroom message**_ in the group, this player will be registered under your name. For example:

    Lit'l Mello (via Mello Yellow)

In this example, *Mello Yellow* registered the player *Lit'l Mello* for the mushroom. Please note that exchanging friend codes is now your responsibility, since the bot cannot know the external player’s code. This function can be useful if your partner also plays Pikmin Bloom but does not have a Telegram account, or if you want to register your second account for a mushroom.

To undo the registration, use **as a reply to the mushroom message** `/mit (playername)`. Make sure to use the same player name.

## Mushroom Alert

![Mushroom Alert](assets/screenshot/mushroom-alert.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Mushroom Alert</em></p>

If you receive a mushroom alert, it is very easy to join that mushroom quickly. Just press ":thumbsup:I'm in" and you will be invited shortly.
For highly desired mushrooms, it may happen that the last free slot has already been taken. In this case, you will receive a notification.

If you are busy or not interested in this mushroom, press "ignore". Or, if you no longer want alerts for this type of mushrooms, you can press "delete alert".
To set up this mushroom alert or another one, use the command `/alarm` to create a new mushroom alert.

The "mute until tomorrow" feature will mute your mushroom alerts until tomorrow morning. You can set the exact time in [the settings](userconfig.md) using the command `/userconfig`. By default, it is 7 a.m. the next morning.

!!! warning ""

    The "mute until tomorrow" feature is only available to supporters. If you also want to become a supporter of the Pilzkampf Bot, [please check here](support.md).

If you enable "mute all alerts", all mushroom alerts will be deactivated until further notice. They remain stored, but you will no longer receive notifications. You can re-enable or disable notifications in [the settings](userconfig.md) using the command `/userconfig`.

[^1]:
    When there is no remaining time configured manually, the remaining time is written as "(appr.)". As soon as the remaining time was adjusted manually once,
    it's written without "(appr.)". However, the next player to join the mushroom battle will reduce the time by an estimation. You might need to adjust the
    remaining time multiple times. It's also okay to leave the estimation. No worries.