# Crear un combate de champiñón

Con el comando `/pilz`, puedes crear un nuevo combate de champiñón o un reto semanal (caminar o plantar). Se te preguntará por la siguiente información:

* Tamaño
* Color
* Número de plazas

El tiempo restante del champiñón se estima basándose en tu nivel, el tamaño y el color. Puedes establecer tu nivel en el [perfil de usuario](profile.md). En la [configuración](userconfig.md), también puedes configurar si se te pregunta adicionalmente por:

* Tiempo restante del champiñón
* Comentario

??? tip "Consejo para expertos"

    Puedes crear un champiñón incluso más rápido escribiendo toda la información directamente después del comando `/pilz`. Si quieres especificar un tiempo restante, ponlo entre dos símbolos :fontawesome-solid-dollar:. Un comentario lo pones entre comillas. Ejemplos:

    * `/pilz champiñón de evento normal con cuatro plazas libres`
    * `/pilz champiñón de agua grande con ticket $1h30m$`
    * `/pilz evento gigante 1 plaza libre $2h12m$ "Por favor usar equipo A y ser rápido"`

    Si el bot no entiende claramente la información, te preguntará en el diálogo.

## Mensaje de champiñón

Después de crear un champiñón, se publica un mensaje en el grupo. Adicionalmente, aparece en tu chat del bot un mensaje de champiñón un poco más corto con los participantes actuales. Detrás de los nombres de los jugadores se muestran diferentes emoji.  
[Más información sobre los emoji](battle.md#emoji).

![Mensaje de combate de champiñón en el chat del bot](assets/screenshot/chatmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Mensaje de combate de champiñón en el chat del bot</em></p>

--8<-- "emoji.es.md:message"

--8<-- "emoji.es.md:medal"

## Aceptar solicitudes de jugadores

Cuando los jugadores muestran interés en tu champiñón, recibes una notificación. Puedes entonces responder con tres botones:

### 📣 está invitado

Si ya eres amigo del jugador en Pikmin Bloom, puedes invitarlo. Después, presiona el botón en el bot. El jugador también será informado sobre la invitación.

### ❌ rechazar

A veces es necesario rechazar una solicitud. Hay tres razones para esto:

* Solo hay plazas con ticket disponibles
* El champiñón ya ha sido combatido
* Otros motivos

Por favor, informa brevemente al jugador para evitar malentendidos. Si solo quedan plazas con ticket, las plazas libres se eliminan automáticamente. Si el champiñón ya fue combatido, se marca como terminado.

### 🤝 Código de amigo

Si aún no sois amigos en Pikmin Bloom, puedes intercambiar códigos de amigo con este botón. Siempre que uno de vosotros tenga un código de amigo guardado, se transmitirá automáticamente. Recibirás un mensaje cuando se haya enviado la solicitud de amistad.

## Configurar champiñón

En la configuración del champiñón puedes editar tu oferta posteriormente – por ejemplo, si las plazas libres o el tiempo restante han cambiado.

![Configurar champiñón](assets/screenshot/mushroom-config.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Configurar champiñón</em></p>

### Eliminar oferta

Si has creado un champiñón incorrecto o inapropiado, puedes eliminarlo dentro de los primeros 30 minutos.

### Retirar invitación

Si alguien se ha apuntado a tu champiñón pero no se ha unido, puedes retirar la invitación y liberar la plaza nuevamente.

### Añadir o eliminar plazas

Si las plazas fueron ocupadas por jugadores externos, puedes eliminarlas o añadir plazas adicionales. Una vez que no quedan plazas libres, el champiñón se cambia automáticamente a "solo con ticket". El bot tiene en cuenta que puedes enviar un máximo de 10 invitaciones.

### Cambiar a con ticket / Cambiar a sin ticket

Si haces clic en "Cambiar a con ticket", se eliminan todas las plazas libres y solo quedan plazas con ticket. Si el champiñón ya está en modo ticket, puedes cambiar a "Sin ticket". Entonces se crea una plaza libre y puedes añadir más.

### Comentario

Puedes añadir un comentario a tu mensaje de champiñón en cualquier momento. Aquí puedes mencionar, por ejemplo, que esperas jugadores locales o que deseas equipos particularmente fuertes.

### Tiempo restante

Si no has especificado un tiempo restante, el bot calculará un tiempo restante estimado – siempre un poco más largo que el tiempo real, para asegurar que la oferta no termine demasiado pronto. Si introduces un tiempo restante manualmente, la estimación se vuelve más precisa.

Puedes especificar el tiempo restante con abreviaturas para días (d), horas (h) y minutos (m) o en formato con dos puntos `:`:

| Entrada | Tiempo restante |
| ------: | :------- |
| 1h 30m  | 90 minutos |
| 20      | 20 minutos |
| 1:0:20  | Un día y 20 minutos |
| 1d 30m  | Un día y 30 minutos |

!!! warning ""

    ¡El orden de **d, h, m** debe mantenerse siempre – de lo contrario, la indicación de tiempo no puede ser reconocida correctamente!

??? info "Cálculo del tiempo restante"

    Para un champiñón nuevo, el tiempo restante se estima en base a tu nivel, el tamaño y el tipo. Para los champiñones de evento, el bot asume que tu fuerza aumenta durante el evento. Por cada jugador invitado, se deduce tiempo proporcionalmente – incluso si el jugador aún no participa activamente en el combate. Si se elimina un jugador, el tiempo restante se aumenta proporcionalmente nuevamente.

    Si quieres que el tiempo restante se muestre **exactamente**, debes introducirlo manualmente. Esto también es útil si usas un `/timer` [para que te recuerde](timer.md) cuando el champiñón expire.

### Hecho

Con esto terminas el diálogo. Sin embargo, todos los cambios que hayas hecho antes ya se han guardado y surten efecto inmediatamente. "Hecho" solo cierra el diálogo.