# Unirse a un combate de champiñón

Unirse a un combate de champiñón es tan simple como presionar un botón. Básicamente hay dos formas:

* A través del mensaje de champiñón en el grupo
* A través de la [Alerta de champiñón](alarm.md)

## Mensaje de champiñón en el grupo
Hay dos botones que son importantes para ti: ":thumbsup:&nbsp;Estoy dentro" para participar y ":thumbsdown:&nbsp;Me salgo" si quieres retirarte del combate de champiñón.  
En el mensaje de champiñón puedes ver...

* quién creó el champiñón
* hasta cuándo el champiñón estará (aproximadamente)[^1] completado
* quién ya se ha apuntado al champiñón
* cuántas plazas libres o con ticket están aún disponibles

El botón "configurar" es importante para el creador del champiñón, quien puede entonces [configurar un champiñón](offer-mushroom.md#configurar-champinon).

![Mensaje de combate de champiñón](assets/screenshot/groupmessage.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Mensaje de combate de champiñón</em></p>

### Registrar jugadores externos

Usando los comandos `/mit` y `/ohne`, puedes registrar o anular el registro de jugadores externos para el champiñón.  
Si escribes el comando `/mit (nombre de jugador)` _**como respuesta a un mensaje de champiñón**_ en el grupo, este jugador será registrado bajo tu nombre. Por ejemplo:

    Lit'l Mello (via Mello Yellow)

En este ejemplo, *Mello Yellow* registró al jugador *Lit'l Mello* para el champiñón. Ten en cuenta que el intercambio de códigos de amigo es ahora tu responsabilidad, ya que el bot no puede conocer el código del jugador externo. Esta función puede ser útil si tu pareja también juega Pikmin Bloom pero no tiene una cuenta de Telegram, o si quieres registrar tu segunda cuenta para un champiñón.

Para deshacer el registro, usa **como respuesta al mensaje de champiñón** `/ohne (nombre de jugador)`. Asegúrate de usar el mismo nombre de jugador.

## Alerta de champiñón

![Alerta de champiñón](assets/screenshot/mushroom-alert.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Alerta de champiñón</em></p>

Si recibes una alerta de champiñón, es muy fácil unirse rápidamente a ese champiñón. Simplemente presiona ":thumbsup:&nbsp;Estoy dentro" y serás invitado pronto.
Para champiñones muy deseados, puede ocurrir que el último lugar libre ya haya sido ocupado. En este caso, recibirás una notificación correspondiente.

Si estás ocupado o no estás interesado en este champiñón, presiona "ignorar". O si ya no tienes interés en este tipo de champiñones, puedes presionar "eliminar alerta".
Para configurar esta alerta de champiñón u otra, usa el comando `/alarm` para crear una nueva alerta de champiñón.

La función "silenciar hasta mañana" silenciará tus alertas de champiñón hasta la mañana siguiente. Puedes establecer la hora exacta en [la configuración](userconfig.md) usando el comando `/userconfig`. Por defecto, son las 7 a.m. de la mañana siguiente.

!!! warning ""

    La función "silenciar hasta mañana" solo está disponible para seguidores. Si también quieres convertirte en seguidor del Pilzkampf Bot, [consulta aquí](support.md).

Si activas "silenciar todas las alertas", todas las alertas de champiñón se desactivarán hasta nuevo aviso. Permane almacenadas, pero ya no recibirás notificaciones. Puedes volver a activar o desactivar las notificaciones en [la configuración](userconfig.md) usando el comando `/userconfig`.

[^1]:
    Cuando no hay tiempo restante configurado manualmente, el tiempo restante se escribe como "(aprox.)". Tan pronto como el tiempo restante se ajusta manualmente una vez,
    se escribe sin "(aprox.)". Sin embargo, el siguiente jugador que se una al combate de champiñón reducirá el tiempo mediante una estimación. Es posible que necesites ajustar
    el tiempo restante varias veces. También está bien dejar la estimación. No te preocupes.