# REPOSITORIO - Aplicación de Captura y Envío de Fotos y Ubicacion a Firebase

Este proyecto es una aplicación web desarrollada con React y Capacitor para capturar fotos, obtener la ubicación del usuario y enviar los datos a Firebase.

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.

## Configuración de Firebase

1. Crea un proyecto en Firebase y configura la autenticación y la base de datos en tiempo real.
2. Abre el archivo `src/firebaseConfig.ts` y actualiza la configuración con los datos de tu proyecto Firebase.

## Ejecución

1. Ejecuta `ionic serve` para iniciar la aplicación.
2. La aplicación se abrirá automáticamente en tu navegador predeterminado.

## Uso

1. Haz clic en el botón "Abrir cámara" para permitir el acceso a la cámara de tu dispositivo.
2. Haz clic en el botón "Mostrar ubicación" para obtener la ubicación actual del usuario.
3. Una vez que se muestre la ubicación, el botón "Guardar Datos" se habilitará.
4. Haz clic en el botón "Guardar Datos" para capturar una foto, subirla a Firebase Storage y enviar los datos de ubicación a Firebase Realtime Database.
5. Se mostrará una notificación con el mensaje "Datos enviados con éxito" si la operación se realiza correctamente.

## Dependencias

- React
- Capacitor
- Firebase

## Capturas de Pantalla

### Pantalla de inicio

![Pantalla de inicio](https://github.com/Martyn147/Ionic-React-Camara-Localizador-Firebase/assets/85313351/41961743-db44-4588-ba40-ba8d12cb1bd1)

### Cámara en acción

![Cámara en acción](https://github.com/Martyn147/Ionic-React-Camara-Localizador-Firebase/assets/85313351/6560b14a-e738-4a06-b99f-9105b22ee154)

### Ubicación mostrada

![Ubicación mostrada](https://github.com/Martyn147/Ionic-React-Camara-Localizador-Firebase/assets/85313351/b1c1b06e-2469-4108-b17f-f54425946d03)

### Datos enviados con éxito

![image](https://github.com/Martyn147/Ionic-React-Camara-Localizador-Firebase/assets/85313351/5af77963-892f-417d-88bf-930f7df2e1b2)


