# 🎮 Tournament Lab

> **Administrador de Torneos Universitarios**  
> Aplicación web full-stack construida con **React** y **.NET** para facilitar el registro, la gestión y la visualización de torneos.

---

## ✨ Descripción General

Tournament Lab es una solución completa que consta de dos partes principales:

-   **Frontend:** Una aplicación de página única (SPA) moderna y reactiva construida con React y Vite, que ofrece una interfaz de usuario intuitiva.
-   **Backend:** Una potente API RESTful construida con .NET, que maneja toda la lógica de negocio, la autenticación y la persistencia de datos.

## 🛠️ Pila Tecnológica

| Área      | Tecnología                                        |
| :-------- | :------------------------------------------------ |
| **Frontend**  | React, Vite, Bootstrap 5, JavaScript (ES6+)       |
| **Backend**   | .NET, ASP.NET Core, Entity Framework Core, C#     |
| **Base de Datos** | SQL Server                                        |
| **DevOps**    | Docker, Docker Compose, Git, NPM                  |
| **Pruebas**   | xUnit, Moq                                        |

---

## 🚀 Cómo Empezar (Método Recomendado con Docker)

Esta es la forma más sencilla de poner en funcionamiento todo el entorno de desarrollo (Backend API + Base de Datos + Frontend).

### **Prerrequisitos**

-   ✅ [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución.
-   ✅ [Node.js](https://nodejs.org/) 18.x o superior (para el frontend).
-   ✅ [Git](https://git-scm.com/)

### **Paso 1: Iniciar el Backend y la Base de Datos**

1.  **Clona el repositorio:**
    ```bash
    git clone git@ssh.dev.azure.com:v3/ProyectoUTSC02/tournament-lab/tournament-lab
    cd tournament-lab
    ```

2.  **Navega al directorio del backend:**
    ```bash
    cd back
    ```

3.  **Configura las variables de entorno del backend:**
    Copia el archivo de ejemplo `.env.example` a un nuevo archivo `.env` y establece una contraseña segura para la base de datos.
    ```bash
    cp .env.example .env
    ```

4.  **Levanta los contenedores de Docker:**
    Este comando construirá y ejecutará la API del backend y la base de datos de SQL Server.
    ```bash
    docker-compose up --build
    ```
    La primera vez puede tardar unos minutos. Una vez finalizado, tendrás la API corriendo en `http://localhost:8080`.

### **Paso 2: Iniciar el Frontend**

1.  Abre una **nueva terminal**.

2.  **Navega al directorio del frontend:**
    ```bash
    # Desde la raíz del proyecto 'tournament-lab'
    cd front
    ```

3.  **Instala las dependencias del frontend:**
    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo del frontend:**
    ```bash
    npm run dev
    ```

### **Paso 3: ¡Listo!**

¡Felicidades! La aplicación completa ya está en funcionamiento.

-   Visita la **aplicación web** en la URL que te indique la terminal de `npm run dev` (normalmente `http://localhost:5173`).
-   La **API del backend** está disponible en `http://localhost:8080`.

---

## Git Workflow y Contribuciones

### Flujo de Trabajo
-   `main` → Rama estable para producción.
-   `develop` → Rama base para integrar cambios.

### Reglas
-   **No trabajes directo en `main` ni `develop`.**
-   Crea ramas desde `develop` usando los prefijos `ft/` para features nuevas o `fix/` para correcciones.

**Ejemplo:**
```bash
# Crear y cambiar a una nueva rama para una funcionalidad
git checkout develop
git checkout -b ft/login-form

# Subir cambios al repositorio remoto
git push origin ft/login-form
```

### Contribuciones
¡Son bienvenidas! Abre un Issue o un Pull Request y asegúrate de seguir la guía de estilos y ramas.

### Configurar llave SSH (Azure DevOps)
Para contribuir al repositorio en Azure DevOps, es posible que necesites una clave SSH. Sigue los pasos de la [documentación oficial](https://learn.microsoft.com/en-us/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops) para generarla y añadirla a tu cuenta.

## 🧠 Créditos
Desarrollado con ❤️ por estudiantes de UT para la gestión eficiente de torneos.