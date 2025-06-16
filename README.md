# 🎮 Tournament Lab

> **Administrador de Torneos Universitarios**  
> Aplicación web construida con **React** y **Bootstrap 5**, pensada para facilitar el registro, inicio de sesión y visualización del panel administrativo de torneos.

---

## ⚙️ Requisitos del sistema

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- ✅ [Node.js](https://nodejs.org/) 18.x o superior
- ✅ [npm](https://www.npmjs.com/)
- ✅ [Git](https://git-scm.com/)

---

## 🔐 Configurar llave SSH (Azure DevOps)

1. Ejecuta en la terminal:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "tu_correo@ejemplo.com"

2. Pulsa 'enter' para aceptar la ubicación por defecto.

3. (Opcional) Agrega una 'passphrase' si deseas mayor seguridad.

4. Tu clave pública estará en:

                        C:\Users\TuUsuario\.ssh\id_rsa.pub

5. Para copiarla al portapapeles:

                        cat ~/.ssh/id_rsa.pub

6. Añádela a Azure DevOps SSH Key.


# Instalación y ejecución local
## Clonar el repositorio
git clone git@ssh.dev.azure.com:v3/ProyectoUTSC02/tournament-lab/tournament-lab

## Acceder al proyecto
cd tournament-lab

## Instalar dependencias
npm install

## Te posicionas en la carpeta 'front'

cd front

# Y por último:
npm run dev


# Flujo de Trabajo GIT
- main → Rama estable para producción

- develop → Rama base para integrar cambios

# 🛠️ Reglas
No trabajes directo en main ni develop.

Crea ramas desde develop:

- ft/ para features nuevas

- fix/ para correcciones

# Ejemplo:
# Crear rama para una funcionalidad
               git checkout develop
               git checkout -b ft/login-form

# Subir cambios
               git push origin ft/login-form


# Contribuciones 
¡Son bienvenidas! Abre un Issue o un pull request y asegúrate de seguir la guía de estilos y ramas.

# 🧠 Créditos
Desarrollado con ❤️ por estudiantes de UT para la gestión eficiente de torneos.

