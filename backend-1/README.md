# Proyecto de Autenticación Simple

Este proyecto contiene una estructura básica de backend utilizando Node.js y Express, así como un sistema de autenticación simple. A continuación se describen los archivos y su funcionalidad.

## Estructura del Proyecto

```
backend
├── routes
│   ├── auth.js         # Rutas relacionadas con la autenticación de usuarios.
│   ├── perfil.js       # Rutas para la gestión de perfiles de usuario.
│   ├── usuario.js      # Rutas para la gestión de usuarios.
│   └── persona.js      # Rutas para la gestión de personas.
├── server.js           # Punto de entrada de la aplicación.
├── package.json        # Configuración del proyecto para npm.
└── README.md           # Documentación del proyecto.
```

## Instalación de Dependencias

Para instalar las dependencias necesarias, ejecuta los siguientes comandos en la terminal:

1. `npm install`
2. `npm start`

## Ejecución del Servidor

El servidor se ejecuta en el puerto 3000. Al iniciar, se mostrará en la consola el siguiente mensaje:

```
✅ Servidor corriendo en http://localhost:3000
```

## Descripción de Archivos

- **server.js**: Este archivo es el punto de entrada de la aplicación. Importa `express`, `cors` y `body-parser`, configura un servidor en el puerto 3000, y utiliza las rutas definidas en `./routes/auth.js`, `./routes/perfil.js`, `./routes/usuario.js` y `./routes/persona.js` con sus respectivos prefijos.

- **routes/auth.js**: Contiene las rutas relacionadas con la autenticación de usuarios.

- **routes/perfil.js**: Contiene las rutas relacionadas con la gestión de perfiles de usuario.

- **routes/usuario.js**: Contiene las rutas relacionadas con la gestión de usuarios.

- **routes/persona.js**: Contiene las rutas relacionadas con la gestión de personas.

- **package.json**: Configuración del proyecto para npm, que incluye las dependencias necesarias: `express`, `cors`, `body-parser` y `nodemailer`.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar un pull request.