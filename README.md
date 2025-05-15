# tournament-lab
Administrador de Torneos

# 📦 Tournament Lab (React)

Aplicación desarrollada con **React** que sigue una arquitectura de ramas organizada para mantener un flujo de trabajo limpio y controlado.

## ✅ Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión recomendada: 18.x o superior)
- [npm](https://www.npmjs.com/) 
- [Git](https://git-scm.com/)

## Obtener la llave SSH
Antes de clonar el repositorio en tu equipo debes tener una llave SSH para poder hacerlo, a 
continuación te muestro los pasos para hacerlo:
1. Abre la terminal y ejecuta el siguiente código:

    ssh-keygen -t rsa -b 4096 -C "tu_correo@ejemplo.com" 

    Dónde "tu_correo@ejemplo.com" puede ser tu correo personal o institucional (de preferencia con el que 
    estas registrado en Azure DevOps)

2. Cuando aparezca este mensaje:

    Enter file in which to save the key (/c/Users/TuUsuario/.ssh/id_rsa): 

    -> Solo presiona Enter para aceptar la ubicación por defecto.

3. Cuando te pregunte por una 'passphrase' (contraseña opcional), puedes dejarlo en blanco o escribir una para
mayor seguridad

    Enter passphrase (empty for no passphrase): 

4. Tu clave SSH se generará en:

    C:\Users\TuUsuario\.ssh\id_rsa      (clave privada)
    C:\Users\TuUsuario\.ssh\id_rsa.pub  (clave pública)

5. Para copiar tu clave pública al portapapeles, ejecuta en la Terminal:

    cat ~/.ssh/id_rsa.pub


6. Una vez copiado la clave te diriges a:

    [click aquí](https://dev.azure.com/ProyectoUTSC02/_usersSettings/keys)

7. Presionas el botón +New Key, y proporcionas una nombre y pegas la clave.


## 🚀 Instalación y ejecución local

Sigue estos pasos para clonar y correr el proyecto localmente:

1. Clona este repositorio:
   
   git clone git@ssh.dev.azure.com:v3/ProyectoUTSC02/tournament-lab/tournament-lab


2. Accede al repositorio del proyecto:

    cd tournament-lab

3. Instala las dependencias:

    npm install ó npm i

4. Ejecuta la aplicación en modo desarrollo:

    npm start

# Flujo de Trabajo con GIT
Este proyecto utiliza un flujo basado en ramas con dos ramas principales:
- main -> Rama estable y lista para producción.
- develop -> Rama de pruebas, donde se integran nuevas funcionalidades y correcciones antes ser pasadas a main.

## Reglas para trabajar el repositorio
- NO TRABAJES directamente en main ni en develop.
- Para cada nueva característica o arreglo de errores, crea una rama a partir de develop.
- Usa los siguientes prefijos para nombrar tus ramas:
    - ft/ -> para nuevas funcionalidades (feature).
    - fx/ -> para correcciones de errores (fix).

# Ejemplos de nombres de ramas
## Para agregar una nueva funcionalidad
git checkout develop
git checkout -b ft/login-form

## Para corregir un error
git checkout develop
git checkout -b fix/button-alignment

# Flujo típico de trabajo 
1. Crea una nueva rama a partir de develop con el prefijo adecuado.
2. Realiza cambios y haz commits con mensajes claros.
3. Haz push de tu rama principal remoto:
    git push origin ft/login-form
4. Crea un pull request (PR) hacia la rama develop.
5. Una vez aprobados los cambios, se integran a develop.
6. Los cambios acumulados en develop serán eventualmente integrados en main para una nueva versión de producción.

# Contribuciones 
¡Las contribuciones son bienvenidas! Por favor, abre un issue o crea un pull request siguiendo las normas del repositorio.
