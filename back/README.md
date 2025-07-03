# TournamentLab - Backend

Este repositorio contiene el backend para la aplicación TournamentLab. Es una API RESTful construida con .NET 9 que proporciona toda la lógica de negocio, gestión de datos y autenticación para la plataforma.

## 📜 Descripción

El propósito de esta API es ofrecer un conjunto de endpoints para gestionar torneos y usuarios. Permite a un administrador crear, leer, actualizar y eliminar torneos, así como gestionar el registro y la autenticación de usuarios a través de JSON Web Tokens (JWT).

## ✨ Características Principales

-   **Gestión de Usuarios:** Endpoints para registro de nuevas cuentas y login.
-   **Autenticación Segura:** Uso de JWT para proteger los endpoints y sesiones seguras con contraseñas hasheadas con BCrypt.
-   **CRUD de Torneos:** Operaciones completas de Crear, Leer, Actualizar y Eliminar para la gestión de torneos.
-   **Base de Datos Robusta:** Uso de Entity Framework Core para mapear objetos C# a una base de datos relacional y gestionar migraciones.
-   **Documentación de API:** Interfaz de Swagger autogenerada para visualizar y probar los endpoints de forma interactiva.

## 🛠️ Tecnologías Utilizadas

-   **Framework:** .NET 9 (ASP.NET Core para la API)
-   **Base de Datos:** Entity Framework Core 8 con SQL Server (configurado para LocalDB en desarrollo)
-   **Autenticación:** JSON Web Tokens (JWT)
-   **Seguridad:** BCrypt.Net-Next para el hasheo de contraseñas
-   **Documentación:** Swashbuckle (Swagger)
-   **Gestión de Scripts:** NPM

## 🚀 Cómo Empezar

Sigue estos pasos para clonar, configurar y ejecutar el proyecto en tu máquina local.

### **Prerrequisitos**

Asegúrate de tener instalado el siguiente software:

-   [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
-   [Node.js y NPM](https://nodejs.org/) (usado para ejecutar scripts de atajo)
-   Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)

### **Instalación y Configuración**

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2.  **Navega al directorio del backend:**
    ```bash
    cd tournament-lab/back
    ```

3.  **Instala las dependencias de NPM:**
    (Esto prepara el entorno para usar los scripts de atajo).
    ```bash
    npm install
    ```

4.  **Restaura los paquetes de .NET:**
    (Esto descarga todas las dependencias del proyecto como Entity Framework, BCrypt, etc.).
    ```bash
    npm run restore
    ```

5.  **Configura tus secretos de desarrollo:**
    La aplicación necesita una clave secreta para firmar los JWT. **Nunca uses la clave por defecto en producción.**
    -   Busca el archivo `src/TournamentLab.Api/appsettings.json`.
    -   Abre el archivo y modifica la sección `Jwt`:
        ```json
        "Jwt": {
          "Key": "CAMBIA_ESTA_CLAVE_SECRETA_POR_ALGO_MUY_LARGO_Y_SEGURO",
          "Issuer": "TournamentLabAPI",
          "Audience": "TournamentLabClient"
        }
        ```
    -   Es una buena práctica copiar este archivo a `appsettings.Development.json` y hacer los cambios ahí para mantener el original limpio.

6.  **Ejecuta la API por primera vez:**
    La base de datos y las tablas se crearán automáticamente la primera vez que inicies la aplicación, gracias al código de migración automática que añadimos.
    ```bash
    npm run api
    ```

### **Uso**

La aplicación debería estar ahora ejecutándose. Puedes acceder a la documentación de Swagger en la URL que aparece en la terminal (normalmente `http://localhost:5147/swagger`).

## 📦 Scripts Disponibles

Hemos configurado varios atajos en `package.json` para facilitar el desarrollo:

-   **`npm run api`**: Inicia la API en modo de desarrollo.
-   **`npm run build`**: Compila todos los proyectos de la solución.
-   **`npm run restore`**: Restaura todos los paquetes de NuGet.
-   **`npm run migration`**: Aplica cualquier migración de base de datos pendiente.

## 🌐 Endpoints de la API

Aquí hay un resumen de los endpoints disponibles actualmente:

### Autenticación

-   **`POST /api/auth/register`**: Registra un nuevo usuario.
-   **`POST /api/auth/login`**: Inicia sesión y devuelve un token JWT.

### Torneos

-   **`POST /api/tournaments`**: Crea un nuevo torneo.
-   **`GET /api/tournaments`**: Obtiene una lista de todos los torneos.
-   **`GET /api/tournaments/{id}`**: Obtiene un torneo específico por su ID.
-   **`PUT /api/tournaments/{id}`**: Actualiza un torneo existente.
-   **`DELETE /api/tournaments/{id}`**: Elimina un torneo.
