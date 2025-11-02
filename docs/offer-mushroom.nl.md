# Paddenstoelengevecht aanmaken

Met het commando `/pilz` kun je een nieuw paddenstoelengevecht of een weekuitdaging (lopen of planten) aanmaken. Je wordt naar de volgende informatie gevraagd:

* Grootte
* Kleur
* Aantal plekken

De resttijd van de paddenstoel wordt geschat op basis van je level, de grootte en de kleur. Je level kun je in het [gebruikersprofiel](profile.md) instellen. In de [instellingen](userconfig.md) kun je bovendien instellen of je aanvullende vragen wilt krijgen voor:

* Resttijd van de paddenstoel
* Opmerking

## Paddenstoelbericht

Nadat je een paddenstoel hebt aangemaakt, wordt er een bericht in de groep gepubliceerd. Daarnaast verschijnt in je bot-chat een iets korter paddenstoelbericht met de huidige deelnemers. Achter de spelernamen worden verschillende emoji weergegeven.  
[Meer informatie over de emoji](battle.md#emoji).

![Paddenstoelengevecht-bericht in bot-chat](assets/screenshot/chatmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Paddenstoelengevecht-bericht in bot-chat</em></p>

--8<-- "emoji.nl.md:message"

--8<-- "emoji.nl.md:medal"

## Speleraanmelding accepteren

Wanneer spelers interesse tonen in je paddenstoel, ontvang je een melding. Je kunt dan met drie knoppen reageren:

### 📣 is uitgenodigd

Als je met de speler al bevriend bent in Pikmin Bloom, kun je hem uitnodigen. Daarna druk je op de knop in de bot. De speler wordt eveneens over de uitnodiging geïnformeerd.

### ❌ afwijzen

Soms is het nodig om een aanmelding af te wijzen. Hiervoor zijn drie redenen:

* Er zijn alleen nog ticket-plekken beschikbaar
* De paddenstoel is al verslagen
* Overige

Informeer de speler even kort om misverstanden te voorkomen. Als alleen nog ticket-plekken over zijn, worden vrije plekken automatisch verwijderd. Was de paddenstoel al verslagen, dan wordt deze als beëindigd gemarkeerd.

### 🤝 Vriendencode

Als jullie in Pikmin Bloom nog niet bevriend zijn, kun je met deze knop vriendencodes uitwisselen. Zodra een van jullie een vriendencode heeft ingevoerd, wordt deze automatisch doorgegeven. Je krijgt een bericht wanneer het vriendschapsverzoek is verzonden.

## Paddenstoel configureren

In de paddenstoelconfiguratie kun je je aanbod achteraf bewerken - bijvoorbeeld als er vrije plekken of de resttijd zijn veranderd.

![Paddenstoel configureren](assets/screenshot/mushroom-config.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Paddenstoel configureren</em></p>

### Aanbod verwijderen

Als je een verkeerde of ongeschikte paddenstoel hebt aangemaakt, kun je deze binnen 30 minuten weer verwijderen.

### Uitnodiging intrekken

Als iemand zich heeft aangemeld maar niet is deelgenomen, kun je de uitnodiging intrekken en de plek weer vrijgeven.

### Plekken toevoegen of verwijderen

Als plekken door externe spelers zijn bezet, kun je deze verwijderen of aanvullende plekken toevoegen. Zodra er geen vrije plekken meer zijn, wordt de paddenstoel automatisch op "met ticket" gezet. De bot houdt daarbij rekening met het feit dat je maximaal 10 uitnodigingen kunt versturen.

### Met Ticket / Zonder Ticket omschakelen

Als je op "Met Ticket omschakelen" klikt, worden alle vrije plekken verwijderd en blijven alleen ticket-plekken over. Als de paddenstoel al op ticket staat, kun je weer naar "Zonder Ticket" overschakelen. Dan wordt er een vrije plek aangemaakt en kun je er meer toevoegen.

### Opmerking

Je kunt altijd een opmerking aan je paddenstoelbericht toevoegen. Hier kun je bijvoorbeeld vermelden dat lokale spelers worden verwacht of dat je vooral sterke teams wenst.

### Resttijd

Als je geen resttijd hebt opgegeven, wordt een geschatte resttijd door de bot berekend - altijd iets langer dan de werkelijke tijd, om ervoor te zorgen dat het aanbod niet te vroeg eindigt. Als je een resttijd handmatig invoert, wordt de schatting daardoor nauwkeuriger.

De resttijd kun je met afkortingen voor dagen (d), uren (h) en minuten (m) opgeven of in het formaat met dubbele punten `:`:

| Invoer | Resttijd |
| ------: | :------- |
| 1h 30m  | 90 minuten |
| 20      | 20 minuten |
| 1:0:20  | Een dag en 20 minuten |
| 1d 30m  | Een dag en 30 minuten |

!!! warning ""

    De volgorde van **d, h, m** moet altijd worden aangehouden - anders kan de tijdsaanduiding niet goed worden herkend!

??? info "Resttijd-berekening"

    Bij een nieuwe paddenstoel wordt de resttijd geschat op basis van je level, de grootte en het type. Bij event-paddenstoelen gaat de bot ervan uit dat je kracht tijdens het event toeneemt. Voor elke uitgenodigde speler wordt een deel van de tijd afgetrokken - ook als de speler nog niet actief aan het gevecht deelneemt. Wordt een speler verwijderd, dan wordt de resttijd weer evenredig verhoogd.

    Als je wilt dat de resttijd **exact** wordt weergegeven, moet je deze handmatig invoeren. Dit is ook zinvol als je een `/timer` gebruikt [om herinnerd te worden](timer.md) zodra de paddenstoel afloopt.

### Klaar

Hiermee beëindig je de dialoog. Alle wijzigingen die je eerder hebt doorgevoerd, waren echter al opgeslagen en hebben direct effect. "Klaar" sluit alleen de dialoog.