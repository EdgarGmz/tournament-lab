# Backend
El backend de Tournament Lab está diseñado para ser robusto, escalable y mantenible, siguiendo principios de arquitectura limpia y buenas prácticas de desarrollo de software.

## Tecnologías Utilizadas

- **.NET 7:** Plataforma principal para el desarrollo de aplicaciones modernas, seguras y de alto rendimiento.
- **C#:** Lenguaje de programación orientado a objetos, utilizado para implementar toda la lógica de negocio y la API.
- **Entity Framework Core:** ORM (Object-Relational Mapper) que facilita la interacción con bases de datos relacionales, permitiendo trabajar con datos como objetos .NET.
- **ASP.NET Core:** Framework para la construcción de APIs RESTful, proporcionando herramientas para el enrutamiento, autenticación, autorización y manejo de solicitudes HTTP.
- **AutoMapper:** Biblioteca para el mapeo automático entre objetos, utilizada principalmente para convertir entidades de dominio en DTOs y viceversa.
- **FluentValidation:** Herramienta para la validación de datos de entrada de manera fluida y desacoplada.

## Principios y Patrones de Diseño

- **Arquitectura Limpia (Clean Architecture):** El proyecto está estructurado para separar claramente las responsabilidades, facilitando la escalabilidad y el mantenimiento. La lógica de negocio está aislada de los detalles de infraestructura y presentación.
- **Inyección de Dependencias:** Se utiliza para desacoplar componentes y facilitar la prueba y extensión del sistema.
- **Patrón Repositorio:** Abstracción sobre la capa de acceso a datos, permitiendo cambiar la fuente de datos sin afectar la lógica de negocio.
- **DTOs (Data Transfer Objects):** Se emplean para transferir datos entre la API y los clientes, evitando exponer directamente las entidades de dominio.
- **Principio de Responsabilidad Única (SRP):** Cada clase y componente tiene una única responsabilidad, lo que mejora la legibilidad y mantenibilidad del código.
- **Validación Centralizada:** La validación de datos se realiza en una capa dedicada, asegurando la integridad de la información antes de procesarla.

## Estructura del Proyecto

El backend está organizado en los siguientes proyectos:

- `src/TournamentLab.Api`: Punto de entrada de la aplicación. Contiene los controladores de la API, configuración de ASP.NET Core, mapeos y validaciones.
- `src/TournamentLab.Core`: Núcleo de la aplicación. Incluye las entidades de dominio, interfaces de repositorios, servicios y lógica de negocio.
- `src/TournamentLab.Infrastructure`: Implementación de la persistencia de datos, configuración de Entity Framework Core, repositorios concretos y servicios de infraestructura.

Esta estructura permite un desarrollo ágil, pruebas unitarias efectivas y la posibilidad de evolucionar el sistema de manera sencilla ante nuevos requerimientos.

## Comandos Útiles

Puedes utilizar los siguientes scripts para facilitar el desarrollo y la administración del backend:

```json
"scripts": {
    "api": "dotnet run --project src/TournamentLab.Api/TournamentLab.Api.csproj",
    "migration": "dotnet ef database update -p src/TournamentLab.Infrastructure -s src/TournamentLab.Api",
    "update:db": "dotnet ef database update --project src/TournamentLab.Api/TournamentLab.Api.csproj",
    "build": "dotnet build TournamentLab.sln",
    "restore": "dotnet restore TournamentLab.sln",
    "drop:db": "dotnet ef database drop -p src/TournamentLab.Infrastructure -s src/TournamentLab.Api",
    "docker:build": "docker compose up --build"
}
```

### Descripción de los scripts

- **api:** Ejecuta la API principal.
- **migration:** Aplica las migraciones de la base de datos usando el proyecto de infraestructura.
- **update:db:** Actualiza la base de datos usando el proyecto de la API.
- **build:** Compila la solución completa.
- **restore:** Restaura los paquetes NuGet de la solución.
- **drop:db:** Elimina la base de datos.
- **docker:build:** Construye y levanta los servicios usando Docker Compose.

## Pasos para Levantar la API

1. **Restaura los paquetes NuGet:**
        ```bash
        dotnet restore
        ```

2. **Aplica las migraciones (opcional, si usas EF Core):**
        ```bash
        dotnet ef database update --project src/TournamentLab.Infrastructure --startup-project src/TournamentLab.Api
        ```

3. **Ejecuta la API:**
        ```bash
        dotnet run --project src/TournamentLab.Api
        ```

4. **Accede a la documentación Swagger:**  
        Una vez levantada la API, navega a `http://localhost:8080/swagger` (o el puerto configurado) para ver y probar los endpoints disponibles.

