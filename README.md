# 🎮 Tournament Lab

> **Administrador de Torneos Universitarios**  
> Aplicación web full-stack construida con **React** y **.NET** para facilitar el registro, la gestión y la visualización de torneos.

---

## ✨ Descripción General

Tournament Lab es una solución completa que consta de dos partes principales:

- **Frontend:** Una aplicación de página única (SPA) moderna y reactiva construida con React y Vite, que ofrece una interfaz de usuario intuitiva.
- **Backend:** Una potente API RESTful construida con .NET, que maneja toda la lógica de negocio, la autenticación y la persistencia de datos.

## 🛠️ Pila Tecnológica

| Área            | Tecnología                                          |
|-----------------|------------------------------------------------------|
| **Frontend**    | React, Vite, Bootstrap 5, JavaScript (ES6+)          |
| **Backend**     | .NET, ASP.NET Core, Entity Framework Core, C#        |
| **Base de Datos** | SQL Server                                          |
| **DevOps**      | Docker, Docker Compose, Git, NPM                     |
| **Pruebas**     | xUnit, Moq                                           |

---

## 🚀 Cómo Empezar (Método Recomendado con Docker)

Esta es la forma más sencilla de poner en funcionamiento todo el entorno de desarrollo (Backend API + Base de Datos + Frontend).

### **Prerrequisitos**

- ✅ [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución.
- ✅ [Node.js](https://nodejs.org/) 18.x o superior (para el frontend).
- ✅ [Git](https://git-scm.com/)

### **Paso 1: Iniciar el Backend y la Base de Datos**

1. **Clona el repositorio:**
    ```bash
    git clone git@github.com:EdgarGmz/tournament-lab.git
    cd tournament-lab
    ```

2. **Navega al directorio del backend:**
    ```bash
    cd back
    ```

3. **Configura las variables de entorno del backend:**
    Copia el archivo de ejemplo `.env.example` a un nuevo archivo `.env` y establece una contraseña segura para la base de datos.
    ```bash
    cp .env.example .env
    ```

4. **Levanta los contenedores de Docker:**
    Primero ejecuta Docker Desktop para poder seguir levantando la imagen. Este comando construirá y ejecutará la API del backend y la base de datos de SQL Server.
    ```bash
    docker-compose up --build
    # o
    npm run docker:build
    ```

    Una vez finalizado, tendrás la API corriendo en `http://localhost:8080`.

### **Paso 2: Iniciar el Frontend**

1. Abre una **nueva terminal**.

2. **Navega al directorio del frontend:**
    ```bash
    cd front
    ```

3. **Instala las dependencias del frontend:**
    ```bash
    npm install
    ```

4. **Ejecuta el servidor de desarrollo del frontend:**
    ```bash
    npm run dev
    ```

### **Paso 3: ¡Listo!**

- Visita la aplicación en `http://localhost:5173`
- API Backend: `http://localhost:8080`

---

## 🧩 Git Workflow y Contribuciones

### Flujo de Trabajo

- `main` → Rama estable para producción.
- `develop` → Rama base para integrar cambios.

### Reglas

- **No trabajes directo en `main` ni `develop`.**
- Usa prefijos: `ft/` (features) y `fix/` (correcciones).

**Ejemplo:**
```bash
git checkout develop
git checkout -b ft/login-form
git push origin ft/login-form
```

---

## 🔐 Configurar llave SSH (GitHub)

### 🪟 Windows

1. Abre PowerShell o Git Bash.
2. Genera una nueva llave:
    ```bash
    ssh-keygen -t ed25519 -C "tu-correo@ejemplo.com"
    ```
3. Inicia el agente:
    ```bash
    eval $(ssh-agent -s)
    ssh-add ~/.ssh/id_ed25519
    ```
4. Copia la llave pública:
    ```bash
    cat ~/.ssh/id_ed25519.pub
    # o
    notepad ~/.ssh/id_ed25519.pub
    ```
5. Agrega la llave a GitHub: [SSH and GPG keys](https://github.com/settings/keys)
6. Prueba la conexión:
    ```bash
    ssh -T git@github.com
    ```

### 🍎 macOS

1. Abre Terminal.
2. Genera la llave:
    ```bash
    ssh-keygen -t ed25519 -C "tu-correo@ejemplo.com"
    ```
3. Inicia el agente y agrega la llave:
    ```bash
    eval "$(ssh-agent -s)"
    ssh-add --apple-use-keychain ~/.ssh/id_ed25519
    ```
4. Copia la llave al portapapeles:
    ```bash
    pbcopy < ~/.ssh/id_ed25519.pub
    ```
5. Agrega a GitHub.
6. Prueba conexión:
    ```bash
    ssh -T git@github.com
    ```

### 🐧 Linux

1. Abre Terminal.
2. Genera la llave:
    ```bash
    ssh-keygen -t ed25519 -C "tu-correo@ejemplo.com"
    ```
3. Inicia el agente y agrega la llave:
    ```bash
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519
    ```
4. Copia la llave:
    ```bash
    cat ~/.ssh/id_ed25519.pub
    # o con xclip
    xclip -sel clip < ~/.ssh/id_ed25519.pub
    ```
5. Agrega a GitHub.
6. Prueba conexión:
    ```bash
    ssh -T git@github.com
    ```

### 🧪 Configuración Global (opcional)
```bash
git config --global url."git@github.com:".insteadOf "https://github.com/"
```

---

## 🤝 Contribuciones

¡Son bienvenidas! Abre un Issue o un Pull Request siguiendo las reglas y guía de ramas.

---

## 🧠 Créditos

Desarrollado con ❤️ por EdgarGmz para crecer como desarrollador Full Stack.
