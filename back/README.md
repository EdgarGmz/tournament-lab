# TournamentLab - Backend

Este repositorio contiene el backend para la aplicación TournamentLab. Es una API RESTful construida con .NET que proporciona toda la lógica de negocio, gestión de datos y autenticación para la plataforma.

## 📜 Descripción

El propósito de esta API es ofrecer un conjunto de endpoints para gestionar torneos y usuarios. Permite a un administrador crear, leer, actualizar y eliminar torneos, así como gestionar el registro y la autenticación de usuarios a través de JSON Web Tokens (JWT).

## ✨ Características Principales

-   **Gestión de Usuarios:** Endpoints para registro de nuevas cuentas y login.
-   **Autenticación Segura:** Uso de JWT para proteger los endpoints y sesiones seguras con contraseñas hasheadas con BCrypt.
-   **CRUD de Torneos:** Operaciones completas de Crear, Leer, Actualizar y Eliminar para la gestión de torneos.
-   **Base de Datos Robusta:** Uso de Entity Framework Core para mapear objetos C# a una base de datos relacional y gestionar migraciones.
-   **Contenerización:** Configuración completa de Docker y Docker Compose para un despliegue y desarrollo consistentes.
-   **Documentación de API:** Interfaz de Swagger autogenerada para visualizar y probar los endpoints de forma interactiva.

## 🛠️ Tecnologías Utilizadas

-   **Framework:** .NET (ASP.NET Core para la API)
-   **Contenerización:** Docker & Docker Compose
-   **Base de Datos:** Entity Framework Core con SQL Server
-   **Autenticación:** JSON Web Tokens (JWT)
-   **Seguridad:** BCrypt.Net-Next para el hasheo de contraseñas
-   **Documentación:** Swashbuckle (Swagger)
-   **Gestión de Scripts:** NPM

---

## 🚀 Ejecutar con Docker (Recomendado)

Sigue estos pasos para levantar todo el entorno (API y base de datos) con un solo comando.

### **Prerrequisitos**

-   [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución.

### **Instalación y Ejecución**

1.  **Clona el repositorio:**
    ```bash
    git clone git@ssh.dev.azure.com:v3/ProyectoUTSC02/tournament-lab/tournament-lab
    ```

2.  **Navega al directorio del backend:**
    ```bash
    cd tournament-lab/back
    ```

3.  **Crea el archivo de variables de entorno:**
    Copia el archivo de ejemplo `.env.example` a un nuevo archivo llamado `.env`.
    ```bash
    # En Windows (usando Git Bash o WSL) o en Linux/macOS
    cp .env.example .env
    ```
    Luego, abre el archivo `.env` y reemplaza `your_strong_password_here` por una contraseña real y segura.

4.  **Levanta los contenedores:**
    Este comando construirá la imagen de la API, descargará la imagen de SQL Server y los iniciará.
    ```bash
    docker-compose up --build
    ```
    La primera vez puede tardar unos minutos. Las veces siguientes será mucho más rápido.

### **Uso**

Una vez que los contenedores estén corriendo, la aplicación estará disponible:

-   **API:** `http://localhost:8080`
-   **Endpoint de Torneos:** `http://localhost:8080/api/tournaments`
-   **Documentación Swagger:** La API no expone Swagger en el entorno de Docker por defecto, pero puedes habilitarlo si lo deseas modificando `Program.cs`.

Para detener todo el entorno, simplemente presiona `Ctrl + C` en la terminal donde se está ejecutando `docker-compose`, o ejecuta `docker-compose down` desde otra terminal.

---

## 📦 Scripts Disponibles

Hemos configurado varios atajos en `package.json` para facilitar el desarrollo:

-   **`npm run docker:build`**: Construye y levanta los contenedores de Docker (API y base de datos).
-   **`npm run api`**: Inicia la API en modo de desarrollo (requiere configuración local).
-   **`npm run build`**: Compila todos los proyectos de la solución.
-   **`npm run restore`**: Restaura todos los paquetes de NuGet.
-   **`npm run migration`**: Aplica cualquier migración de base de datos pendiente (para desarrollo local).

## 🌐 Endpoints de la API

### Autenticación

-   **`POST /api/auth/register`**: Registra un nuevo usuario.
-   **`POST /api/auth/login`**: Inicia sesión y devuelve un token JWT.

### Torneos (Requiere autenticación)

-   **`POST /api/tournaments`**: Crea un nuevo torneo.
-   **`GET /api/tournaments`**: Obtiene una lista de todos los torneos.
-   **`GET /api/tournaments/{id}`**: Obtiene un torneo específico por su ID.
-   **`PUT /api/tournaments/{id}`**: Actualiza un torneo existente.
-   **`DELETE /api/tournaments/{id}`**: Elimina un torneo.