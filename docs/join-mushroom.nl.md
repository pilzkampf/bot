# Deelnemen aan een paddenstoelengevecht

Deelnemen aan een paddenstoelengevecht is zo eenvoudig als op een knop drukken. Er zijn in principe twee manieren:

* Via het paddenstoelbericht in de groep
* Via de [Paddenstoelwaarschuwing](alarm.md)

## Paddenstoelbericht in de groep
Er zijn twee knoppen die belangrijk voor je zijn: ":thumbsup:&nbsp;ik doe mee" om deel te nemen en ":thumbsdown:&nbsp;ik doe niet mee" als je je terug wilt trekken uit het paddenstoelengevecht.
In het paddenstoelbericht kun je zien...

* wie de paddenstoel heeft aangemaakt
* tot wanneer de paddenstoel (ongeveer)[^Resttijd] verslagen is
* wie zich al voor de paddenstoel heeft aangemeld
* hoeveel plekken zonder of met ticket nog beschikbaar zijn

De knop "configureren" is belangrijk voor de aanmaker van de paddenstoel, die dan een [paddenstoel kan configureren](offer-mushroom.md#paddenstoel-configureren).

![Paddenstoelengevecht-bericht](assets/screenshot/groupmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Paddenstoelengevecht-bericht</em></p>

### Externe spelers aanmelden

Met de commando's `/mit` en `/ohne` kun je externe spelers voor de paddenstoel aanmelden of weer afmelden. Als je het commando `/mit (spelersnaam)` _**als
antwoord op een paddenstoelbericht**_ in de groep schrijft, wordt deze speler onder jouw naam bij de paddenstoel geregistreerd. Bijvoorbeeld:

    wishmaster (via AliceBruno)

In dit voorbeeld heeft *AliceBruno* de speler *wishmaster* voor de paddenstoel aangemeld. Let op dat de uitwisseling van de vriendencode nu jouw
verantwoordelijkheid is, omdat de bot de code van de externe speler niet kan kennen. Deze functie kan handig zijn als je partner ook
Pikmin Bloom speelt maar geen Telegram-account heeft, of als je je tweede account voor een paddenstoel wilt aanmelden.

Om de aanmelding ongedaan te maken, gebruik je **als antwoord op het paddenstoelbericht** `/ohne (spelersnaam)`. Let op dat je de
zelfde spelersnaam gebruikt.

## Paddenstoelwaarschuwing

![Paddenstoelwaarschuwing](assets/screenshot/mushroom-alert.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Paddenstoelwaarschuwing</em></p>

Als je een paddenstoelwaarschuwing krijgt, is het heel eenvoudig om snel aan deze paddenstoel deel te nemen. Druk simpelweg op ":thumbsup:&nbsp;ik doe mee" en je wordt snel uitgenodigd.
Bij bijzonder gewilde paddenstoelen kan het voorkomen dat de laatste vrije plek net al bezet is. In dat geval ontvang je een corresponderende
melding.

Ben je bezig of geïnteresseerd in deze paddenstoel, druk dan op "negeren". Of als je geen interesse meer hebt in dit type paddenstoelen,
kun je op "waarschuwing verwijderen" drukken. Als je deze paddenstoelwaarschuwing of een andere wilt instellen, moet je met het commando `/alarm` een nieuwe
paddenstoelwaarschuwing instellen.

Met de functie "dempen tot morgen" worden je paddenstoelwaarschuwingen tot morgenochtend gedempt. Het tijdstip kun je in [de instellingen](userconfig.md) met
het commando `/userconfig` instellen. Standaard is het 7 uur de volgende ochtend.

!!! warning ""

    De functie "dempen tot morgen" is alleen beschikbaar voor ondersteuners. Als je ook ondersteuner van de Pilzkampf Bot wilt worden,
    [kijk dan hier](support.md).

Als je "waarschuwingen dempen" inschakelt, worden alle paddenstoelwaarschuwingen tot nader order gedeactiveerd. Ze blijven opgeslagen maar je ontvangt geen
meldingen meer. De meldingen kun je in [de instellingen](userconfig.md) met het commando `/userconfig` activeren en deactiveren.

[^Resttijd]:
    Als er geen resttijd handmatig is ingevoerd, wordt de tijd met "(ongeveer)" aangegeven. Zodra de resttijd eenmaal handmatig is ingevoerd, verdwijnt
    het "(ongeveer)". Echter, bij de volgende speler wordt een geschatte tijd van de resttijd afgetrokken. Daarom moet je mogelijk meerdere keren de resttijd
    aanpassen. Of je houdt de schatting aan. Helemaal jouw keuze, geen stress!