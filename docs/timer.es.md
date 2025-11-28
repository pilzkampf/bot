# Temporizador

Con el comando `/timer` puedes hacer que se te envíe una notificación programada.

## Temporizador sin parámetros

Si solo introduces `/timer`, recibirás una lista de los temporizadores activos. Por favor, ten en cuenta que la lista no se actualiza automáticamente.
Si no hay temporizadores activos, se mostrará un texto de ayuda breve.

## Temporizador como respuesta

También puedes usar el comando como respuesta a un mensaje de champiñón. Si estás participando en este champiñón, el temporizador se establecerá automáticamente
en la hora de finalización del combate de champiñón y recibirás una notificación cuando el combate de champiñón se complete.

## Temporizador con parámetros

Por supuesto, también puedes establecer un temporizador para todo tipo de cosas: tu expedición de Pikmin Bloom, la lavadora o simplemente como recordatorio.

| Comando | Efecto |
|----------|---------|
|`/timer`  | Muestra la lista de temporizadores activos o un texto de ayuda. En la lista puedes eliminar temporizadores individuales. |
|`/timer 30` o `/timer 30m` | Estableces un temporizador para 30 minutos. También puedes hacer esto como respuesta a un mensaje de champiñón si quieres que te recuerden antes. El tiempo del temporizador ***no se ajustará al tiempo restante***. |
|`/timer 1:20 "Expedición"` | Puedes dar al temporizador su propio texto de comentario. Esto puede ayudarte a distinguir entre diferentes temporizadores. El comentario debe estar entre comillas. Estos caracteres se reconocen como comillas: `„“”«»‘''"` |

Puedes establecer el tiempo del temporizador en días (d), horas (h) y minutos (m), o puedes usar dos puntos para separar los valores.