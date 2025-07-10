# Backend

Este directorio contiene el código fuente y la configuración del backend de Tournament Lab.

## Tecnologías

*   **.NET:** Framework para el desarrollo de la aplicación.
*   **C#:** Lenguaje de programación principal.
*   **Entity Framework Core:** ORM para la interacción con la base de datos.
*   **ASP.NET Core:** Framework para la construcción de la API RESTful.

## Estructura del Proyecto

El backend sigue una arquitectura limpia, dividida en los siguientes proyectos:

*   `src/TournamentLab.Api`: Punto de entrada de la aplicación. Contiene los controladores de la API, DTOs y la configuración de ASP.NET Core.
*   `src/TournamentLab.Core`: Contiene la lógica de negocio principal, incluyendo las entidades del dominio y los servicios.
*   `src/TournamentLab.Infrastructure`: Se encarga de la persistencia de datos, implementando los repositorios y la configuración de Entity Framework Core.