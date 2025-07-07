# TournamentLab - Backend

Este repositorio contiene el backend para la aplicación TournamentLab. Es una API RESTful construida con .NET que proporciona toda la lógica de negocio, gestión de datos y autenticación para la plataforma.

## 📜 Descripción

El propósito de esta API es ofrecer un conjunto de endpoints para gestionar torneos y usuarios. Sigue una arquitectura limpia para separar responsabilidades, utiliza DTOs para definir contratos de API seguros y está protegida por autenticación JWT.

## ✨ Características Principales

-   **Arquitectura Limpia en 3 Capas:** Separación clara de responsabilidades (API, Lógica de Negocio y Acceso a Datos) para un código más mantenible y escalable.
-   **Contratos de API con DTOs:** Uso de Data Transfer Objects para definir contratos claros y seguros con los clientes, evitando exponer el modelo de la base de datos.
-   **Validación de Datos de Entrada:** Atributos de validación en los DTOs para proteger la API de datos maliciosos o con mal formato antes de que lleguen a la lógica de negocio.
-   **Gestión de Usuarios:** Endpoints para registro de nuevas cuentas y login.
-   **Autenticación Segura:** Uso de JWT para proteger los endpoints y sesiones seguras con contraseñas hasheadas con BCrypt.
-   **CRUD de Torneos:** Operaciones completas de Crear, Leer, Actualizar y Eliminar para la gestión de torneos.
-   **Base de Datos Robusta:** Uso de Entity Framework Core para mapear objetos C# a una base de datos relacional y gestionar migraciones.
-   **Cobertura de Pruebas Unitarias:** Pruebas con xUnit y Moq para garantizar la fiabilidad de la lógica de negocio.
-   **Contenerización:** Configuración completa de Docker y Docker Compose para un despliegue y desarrollo consistentes.
-   **Documentación de API:** Interfaz de Swagger autogenerada para visualizar y probar los endpoints de forma interactiva.

## 🏗️ Arquitectura

El proyecto está estructurado siguiendo los principios de la Arquitectura Limpia:

-   **`TournamentLab.Api`**: La capa de entrada. Responsable de exponer los endpoints HTTP, manejar las peticiones, respuestas y la autenticación. No contiene lógica de negocio.
-   **`TournamentLab.Core`**: El corazón de la aplicación. Contiene las entidades de negocio, las interfaces de los repositorios y los servicios con la lógica de negocio principal. No depende de ninguna otra capa.
-   **`TournamentLab.Infrastructure`**: La capa de datos. Implementa los repositorios y se comunica con la base de datos usando Entity Framework Core.
-   **`TournamentLab.Test`**: Proyecto de pruebas unitarias para verificar la funcionalidad de la capa `Core`.

## 🛠️ Tecnologías Utilizadas

-   **Framework:** .NET (ASP.NET Core para la API)
-   **Contenerización:** Docker & Docker Compose
-   **Base de Datos:** Entity Framework Core con SQL Server
-   **Autenticación:** JSON Web Tokens (JWT)
-   **Seguridad:** BCrypt.Net-Next para el hasheo de contraseñas
-   **Pruebas:** xUnit y Moq
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

## 🧪 Pruebas

El proyecto incluye una suite de pruebas unitarias para la capa de lógica de negocio (`Core`).

Para ejecutar las pruebas, navega al directorio `back` y ejecuta uno de los siguientes comandos:

```bash
# Usando el gestor de paquetes de .NET
dotnet test

# O usando el script de NPM
npm run test
```

## 📦 Scripts Disponibles

Hemos configurado varios atajos en `package.json` para facilitar el desarrollo:

-   **`npm run docker:build`**: Construye y levanta los contenedores de Docker (API y base de datos).
-   **`npm run api`**: Inicia la API en modo de desarrollo (requiere configuración local).
-   **`npm run test`**: Ejecuta todas las pruebas unitarias del proyecto.
-   **`npm run build`**: Compila todos los proyectos de la solución.
-   **`npm run restore`**: Restaura todos los paquetes de NuGet.
-   **`npm run migration`**: Aplica cualquier migración de base de datos pendiente (para desarrollo local).

## 🌐 Endpoints de la API

### Autenticación

#### `POST /api/auth/register`
Registra un nuevo usuario.

-   **Request Body:**
    ```json
    {
      "username": "testuser",
      "email": "test@example.com",
      "password": "Password123!"
    }
    ```
-   **Success Response:** `201 Created`

#### `POST /api/auth/login`
Inicia sesión y devuelve un token JWT.

-   **Request Body:**
    ```json
    {
      "username": "testuser",
      "password": "Password123!"
    }
    ```
-   **Success Response:** `200 OK`
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### Torneos (Requiere autenticación)

#### `POST /api/tournaments`
Crea un nuevo torneo.

-   **Request Body:**
    ```json
    {
      "name": "Torneo de Ajedrez",
      "participants": ["Player1", "Player2"],
      "startDate": "2025-08-01T10:00:00Z",
      "endDate": "2025-08-02T18:00:00Z",
      "description": "Torneo abierto para todos los niveles.",
      "tournament_Type": "TCGs"
    }
    ```
-   **Success Response:** `201 Created`
    ```json
    {
      "id": 1,
      "name": "Torneo de Ajedrez",
      "status": "Upcoming",
      "participants": ["Player1", "Player2"],
      "startDate": "2025-08-01T10:00:00Z",
      "endDate": "2025-08-02T18:00:00Z",
      "description": "Torneo abierto para todos los niveles.",
      "tournament_Type": "TCGs",
      "userId": 123
    }
    ```

#### `GET /api/tournaments`
Obtiene una lista de todos los torneos.

-   **Success Response:** `200 OK` con un array de `TournamentDto`.

#### `GET /api/tournaments/{id}`
Obtiene un torneo específico por su ID.

-   **Success Response:** `200 OK` con un `TournamentDto`.

#### `PUT /api/tournaments/{id}`
Actualiza un torneo existente.

-   **Request Body:** (Mismo formato que el `POST`)
-   **Success Response:** `204 No Content`

#### `DELETE /api/tournaments/{id}`
Elimina un torneo.

-   **Success Response:** `204 No Content`
