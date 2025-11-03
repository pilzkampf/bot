# Unirse a una Batalla de Hongos

Unirse a una batalla de hongos es tan simple como presionar un botón. Básicamente hay dos formas:

* A través del mensaje de hongo en el grupo
* A través de la [Alerta de Hongos](alarm.md)

## Mensaje de hongo en el grupo
Hay dos botones que son importantes para ti: ":thumbsup:&nbsp;Estoy dentro" para participar y ":thumbsdown:&nbsp;Estoy fuera" si quieres retirarte de la batalla de hongos.  
En el mensaje de hongo puedes ver...

* quién creó el hongo
* hasta cuándo el hongo estará (aproximadamente)[^1] completado
* quién ya se ha registrado para el hongo
* cuántas plazas libres o con ticket todavía están disponibles

El botón "configurar" es importante para el creador del hongo, quien puede entonces [configurar un hongo](offer-mushroom.md#configurar-hongo
<p align="center"><em>Mensaje de hongo</em></p>

### Registrar jugadores externos

Usando los comandos `/mit` y `/ohne`, puedes registrar o anular el registro de jugadores externos para el hongo.  
Si escribes el comando `/mit (nombredejugador)` _**como respuesta a un mensaje de hongo**_ en el grupo, este jugador será registrado bajo tu nombre. Por ejemplo:

    Lit'l Mello (via Mello Yellow)

En este ejemplo, *Mello Yellow* registró al jugador *Lit'l Mello* para el hongo. Ten en cuenta que intercambiar códigos de amigo es ahora tu responsabilidad, ya que el bot no puede conocer el código del jugador externo. Esta función puede ser útil si tu pareja también juega Pikmin Bloom pero no tiene una cuenta de Telegram, o si quieres registrar tu segunda cuenta para un hongo.

Para deshacer el registro, usa **como respuesta al mensaje de hongo** `/ohne (nombredejugador)`. Asegúrate de usar el mismo nombre de jugador.

## Alerta de Hongos

![Alerta de Hongos](assets/screenshot/mushroom-alert.png){ width="50%" style="display: block; margin: 0 auto" }
<p align="center"><em>Alerta de Hongos</em></p>

Si recibes una alerta de hongos, es muy fácil unirse a ese hongo rápidamente. Simplemente presiona ":thumbsup:&nbsp;Estoy dentro" y serás invitado pronto.
Para hongos muy deseados, puede suceder que la última plaza libre ya haya sido ocupada. En este caso, recibirás una notificación.

Si estás ocupado o no estás interesado en este hongo, presiona "ignorar". O, si ya no quieres alertas para este tipo de hongos, puedes presionar "eliminar alerta".
Para configurar esta alerta de hongos u otra, usa el comando `/alarm` para crear una nueva alerta de hongos.

La función "silenciar hasta mañana" silenciará tus alertas de hongos hasta mañana por la mañana. Puedes establecer la hora exacta en [la configuración](userconfig.md) usando el comando `/userconfig`. Por defecto, son las 7 a.m. de la mañana siguiente.

!!! warning ""

    La función "silenciar hasta mañana" solo está disponible para partidarios. Si también quieres convertirte en partidario del Pilzkampf Bot, [consulta aquí](support.md).

Si activas "silenciar todas las alertas", todas las alertas de hongos se desactivarán hasta nuevo aviso. Permanecen almacenadas, pero ya no recibirás notificaciones. Puedes volver a activar o desactivar las notificaciones en [la configuración](userconfig.md) usando el comando `/userconfig`.

[^1]:
    Cuando no hay tiempo restante configurado manualmente, el tiempo restante se escribe como "(aprox.)". Tan pronto como el tiempo restante se ajusta manualmente una vez,
    se escribe sin "(aprox.)". Sin embargo, el siguiente jugador que se una a la batalla de hongos reducirá el tiempo mediante una estimación. Es posible que necesites ajustar el
    tiempo restante varias veces. También está bien dejar la estimación. No te preocupes.