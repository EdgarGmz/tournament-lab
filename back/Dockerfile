# Fase 1: Compilar la aplicación
# Usamos la imagen del SDK de .NET 8.0 que tiene todas la herramientas de compilación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

# Copiar solo los archivos de proyecto (*.csproj) para restaurar las dependencias
# Esto aprovecha la caché de Docker. Si los .csproj no cambian, no se volverán a restaurar las dependencias
COPY src/TournamentLab.Api/*.csproj ./src/TournamentLab.Api/
COPY src/TournamentLab.Core/*.csproj ./src/TournamentLab.Core/
COPY src/TournamentLab.Infrastructure/*.csproj ./src/TournamentLab.Infrastructure/

# Restaurar las dependencias para el proyecto principal (que tienen referecias a los otros proyectos)
RUN dotnet restore src/TournamentLab.Api/TournamentLab.Api.csproj

# Copiar el resto del código fuente
COPY src/. ./src/

# Publicar la aplicación, creando una versión optimizada para producción
WORKDIR /source/src/TournamentLab.Api
RUN dotnet publish -c Release -o /app/publish --no-restore

# Fase 2: Crear la imagen final de ejecución
# Usamos la imagen de ASP.NET que es mucho más ligera porque no tiene las herramientas de compilación
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copiar solo la aplicación publicada desde la fase de compilación
COPY --from=build /app/publish .

# Definir el punto de entrada para ejecutar la aplicación cuando se inicie el contenedor
ENTRYPOINT ["dotnet", "TournamentLab.Api.dll"]