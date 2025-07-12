FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

COPY src/TournamentLab.Api/*.csproj ./src/TournamentLab.Api/
COPY src/TournamentLab.Core/*.csproj ./src/TournamentLab.Core/
COPY src/TournamentLab.Infrastructure/*.csproj ./src/TournamentLab.Infrastructure/

RUN dotnet restore src/TournamentLab.Api/TournamentLab.Api.csproj

COPY src/. ./src/

WORKDIR /source/src/TournamentLab.Api
RUN dotnet publish -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "TournamentLab.Api.dll"]
