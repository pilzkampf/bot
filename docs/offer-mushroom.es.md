# Crear una Batalla de Hongos

Con el comando `/pilz`, puedes crear una nueva batalla de hongos o un desafío semanal (caminar o plantar). Se te pedirá la siguiente información:

* Tamaño
* Color
* Número de plazas

El tiempo restante del hongo se estima en base a su tamaño, color y tu nivel. Puedes establecer tu nivel en el [perfil de usuario](profile.md). En la [configuración](userconfig.md), también puedes habilitar preguntas adicionales para:

* Tiempo restante
* Comentario

??? tip "Consejo profesional"

    Puedes crear una batalla de hongos incluso más rápido agregando toda la información necesaria directamente después del comando `/pilz`. Si quieres especificar el tiempo restante, ponlo entre dos símbolos :fontawesome-solid-dollar:. Los comentarios van entre comillas. Ejemplos:

    * `/pilz hongo de evento normal con cuatro plazas libres`
    * `/pilz hongo de agua grande con ticket $1h30m$`
    * `/pilz evento gigante 1 plaza libre $2h12m$ "Por favor usa equipo A y sé rápido"`

    Si el bot no puede entender claramente lo que quieres decir, te pedirá los detalles en un diálogo.

## Mensaje de Hongo

Después de crear una batalla de hongos, se publica un mensaje en el grupo. También recibirás un mensaje de hongo ligeramente más corto en tu chat del bot, mostrando los participantes actuales. Diferentes emojis aparecen junto a los nombres de los jugadores.  
[Más sobre los emojis](battle.md#emoji).

![Mensaje de hongo en el chat del bot](assets/screenshot/chatmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Mensaje de hongo en el chat del bot</em></p>

--8<-- "emoji.es.md:message"

--8<-- "emoji.es.md:medal"

## Aceptar Solicitudes de Jugadores

Cuando un jugador quiere unirse a tu hongo, recibirás una notificación. Puedes responder con tres botones:

### 📣 Invitación enviada

Si ya son amigos en Pikmin Bloom, puedes enviar una invitación en el juego. Después, presiona el botón en el bot. El jugador también será notificado por el bot.

### ❌ Rechazar

A veces es necesario rechazar una solicitud. Puedes elegir entre:

* Solo quedan plazas con ticket
* El hongo ya ha sido completado
* Otras razones

Por favor informa brevemente al jugador para evitar malentendidos. Si solo quedan plazas con ticket, cualquier plaza libre no asignada se elimina automáticamente. Si el hongo ya fue completado, se marca como terminado.

### 🤝 Código de amigo

Si aún no son amigos en Pikmin Bloom, puedes intercambiar códigos de amigo usando este botón. Mientras tú o el otro jugador tengan un código de amigo guardado, se compartirá automáticamente. Serás notificado una vez que se haya enviado la solicitud de amistad.

## Configurar Hongo

En la configuración del hongo, puedes ajustar tu oferta posteriormente – por ejemplo, si las plazas disponibles o el tiempo restante han cambiado.

![Configurar hongo](assets/screenshot/mushroom-config.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Configurar hongo</em></p>

### Eliminar oferta

Si notas que el hongo que creaste es incorrecto o ya no es válido, puedes eliminarlo dentro de los primeros 30 minutos.

### Retirar invitación

Si alguien solicitó unirse a tu hongo pero no se unió, puedes retirar la invitación y liberar la plaza nuevamente.

### Agregar o eliminar plazas

Si las plazas fueron tomadas inesperadamente por jugadores externos, puedes eliminarlas o agregar más plazas. Una vez que se eliminan todas las plazas libres, el hongo se establece automáticamente en "solo ticket". El bot tiene en cuenta que puedes enviar como máximo 10 invitaciones y calcula las plazas en base a las solicitudes e invitaciones existentes.

### Cambiar a ticket / cambiar a sin ticket

Si activas "con ticket", se eliminan todas las plazas libres y solo quedan plazas con ticket. Si ya está configurado como solo ticket, puedes cambiar a "sin ticket". En este caso, se agrega una plaza libre y puedes agregar más.

### Comentario

Puedes agregar o actualizar un comentario para tu mensaje de hongo en cualquier momento. Por ejemplo, puedes advertir que podrían unirse jugadores locales, o pedir a otros que usen sus equipos más fuertes.

### Tiempo restante

Si no se especificó un tiempo restante, el bot lo estimará. Esta estimación siempre es ligeramente más larga que el tiempo real, para asegurar que la oferta no expire demasiado pronto. Si estableces manualmente un tiempo restante, la estimación se vuelve más precisa.

Puedes ingresar el tiempo restante usando abreviaturas para días (d), horas (h) y minutos (m), o con dos puntos `:`:

| Entrada  | Tiempo restante |
| ------:| :-------------- |
| 1h 30m | 90 minutos |
| 20     | 20 minutos |
| 1:0:20 | 1 día y 20 minutos |
| 1d 30m | 1 día y 30 minutos |

!!! warning ""

    Asegúrate de mantener siempre el orden **d, h, m**. De lo contrario, la entrada no puede interpretarse correctamente.

??? info "Cómo se calcula el tiempo restante"

    Cuando creas un nuevo hongo, el tiempo restante se estima en base al tipo de hongo, tamaño y tu nivel. Para hongos de evento, el bot asume que tu fuerza aumenta durante el evento. Por cada jugador que invites, se deduce una porción de tiempo – incluso si el jugador aún no se ha unido en el juego. Si se elimina un jugador, el tiempo restante se agrega nuevamente en consecuencia.

    Si quieres que el tiempo restante se muestre **exactamente**, debes establecerlo manualmente en la configuración. Esto también es útil si quieres usar `/timer` [para ser notificado](timer.md) cuando el hongo expire.

### Listo

Esto cierra el diálogo. Todos los cambios que hiciste anteriormente ya fueron guardados y surten efecto inmediatamente. "Listo" solo cierra la ventana de configuración.