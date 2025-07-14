using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using TournamentLab.Core.Entities;
using TournamentLab.Core.Services;
using TournamentLab.Infrastructure.Data;
using TournamentLab.Infrastructure.Repositories;
using TournamentLab.Api.DTOs;
using static BCrypt.Net.BCrypt;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);

// CORS
var MyAllowSpecificOrigins = "_myAllowEspecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins, policy =>
    {
        // ¡Importante! Esta es la URL donde corre el frontend
        // El puerto 5173 es el que se usa en Vite por defecto. Cambiar si es necesario.
                policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
    });
});

// Configurar Servicios
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders =
        ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
});
builder.Services.AddDbContext<TournamentLabDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Pruebas
builder.Services.AddScoped<IAuthRepository, AuthRepository>();
builder.Services.AddScoped<ITournamentRepository, TournamentRepository>();
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<TournamentService>();

// Autenticación JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
            };
        });
// Añadir servicio de autorización
builder.Services.AddAuthorization();

// Construir la aplicación
var app = builder.Build();

// Aplicar migraciones de EF Core al iniciar la aplicación.
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var dbContext = services.GetRequiredService<TournamentLabDbContext>();
        dbContext.Database.Migrate();
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "Ocurrió un error durante la migración de la base de datos.");
    }
}

// Configurar el pipeline de la aplicación
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseForwardedHeaders();
app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

// ENDPOINTS - TOURNAMENTS

// Endpoint de pruebas
app.MapGet("/", () => "Api is runnig!");

// Post: Crear un nuevo torneo
app.MapPost("/api/tournaments", async (
    CreateTournamentDto tournamentDto,
    TournamentService tournamentService,
    HttpContext httpContext) =>
{
    // Obtener el ID del usuario que hace la petición desde el token JWT
    var userIdClaim = httpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
    if (userIdClaim == null)
    {
        return Results.Unauthorized();
    }

    var userId = int.Parse(userIdClaim.Value);

    // Llamar al servicio "desempacando" los datos del DTO
    var newTournamentEntity = await tournamentService.CreateTournamentAsync(
        tournamentDto.Name,
        tournamentDto.Description,
        tournamentDto.Participants,
        userId,
        tournamentDto.StartDate ?? DateTime.Today,
        tournamentDto.EndDate,
        tournamentDto.Tournament_Type
    );

    // Mapear la entidad de respuesta a un DTO para no exponer la entidad de BD
    var tournamentResponseDto = new TournamentDto
    {
        Id = newTournamentEntity.Id,
        Name = newTournamentEntity.Name,
        Status = newTournamentEntity.Status,
        Participants = newTournamentEntity.Participants,
        StartDate = newTournamentEntity.StartDate,
        EndDate = newTournamentEntity.EndDate,
        Description = newTournamentEntity.Description,
        Tournament_Type = newTournamentEntity.Tournament_Type,
        UserId = newTournamentEntity.UserId
    };

    return Results.Created($"/api/tournaments/{tournamentResponseDto.Id}", tournamentResponseDto);
    
}).RequireAuthorization();

// Get: Obtener todos los torneos 
app.MapGet("/api/tournaments", async (TournamentService tournamentService) =>
{
    var tournaments = await tournamentService.GetAllTournamentsAsync();

    var tournamentDto = tournaments.Select(t => new TournamentDto
    {
        Id = t.Id,
        Name = t.Name,
        Status = t.Status,
        Participants = t.Participants,
        StartDate = t.StartDate,
        EndDate = t.EndDate,
        Description = t.Description,
        Tournament_Type = t.Tournament_Type,
        UserId = t.UserId,
        Champion = t.Champion,
        ReasonCancellation = t.ReasonCancellation
    });

    return Results.Ok(tournamentDto);
});

// Get: Obtener un torneo por ID
app.MapGet("/api/tournaments/{id}", async (int id, TournamentService tournamentService) =>
{
    var tournament = await tournamentService.GetTournamentByIdAsync(id);

    if (tournament == null)
    {
        return Results.NotFound();
    }

    // Mapear la entidad a un DTO para la respuesta
    var tournamentDto = new TournamentDto
    {
        Id = tournament.Id,
        Name = tournament.Name,
        Status = tournament.Status,
        Participants = tournament.Participants,
        StartDate = tournament.StartDate,
        EndDate = tournament.EndDate,
        Description = tournament.Description,
        Tournament_Type = tournament.Tournament_Type,
        UserId = tournament.UserId,
        Champion = tournament.Champion,
        ReasonCancellation = tournament.ReasonCancellation
    };

    return Results.Ok(tournamentDto);
});

// Put: Actualizar un torneo existente
app.MapPut("/api/tournaments/{id}", async (int id,
    CreateTournamentDto tournamentDto,
    TournamentService tournamentService) =>
{
    var UpdatedTournament = await tournamentService.UpdateTournamentAsync(
        id,
        tournamentDto.Name,
        tournamentDto.Description,
        tournamentDto.Participants,
        tournamentDto.StartDate,
        tournamentDto.EndDate,
        tournamentDto.Tournament_Type,
        tournamentDto.Status,
        tournamentDto.Champion,
        tournamentDto.ReasonCancellation
    );

    if (UpdatedTournament is null)
    {
        return Results.NotFound();
    }

    return Results.NoContent();
    
}).RequireAuthorization();

// Delete: Eliminar un torneo por ID
app.MapDelete("/api/tournaments/{id}", async (int id, TournamentService tournamentService) =>
{
    var success = await tournamentService.DeleteTournamentAsync(id);
    if (!success)
    {
        return Results.NotFound();
    }
        
    return Results.NoContent();
}).RequireAuthorization();


// ENDPOINTS - USERS
// Post: Crear un nuevo usuario
app.MapPost("/api/auth/register", async (RegisterUserDto registerDto, AuthService authService) =>
{
    var validationResult = new List<ValidationResult>();
    var validationContext = new ValidationContext(registerDto, null, null);

    // Intentamos validar el objeto DTO explicitamente
    bool isValid = Validator.TryValidateObject(registerDto, validationContext, validationResult, true);

    // Si no es válido, devolvemos un error 400 con los detalles
    if (!isValid)
    {
    // Creamos un diccionario para que los errores sean dificiles de leer en el frontend
    var errors = validationResult
                        .GroupBy(e => e.MemberNames.First())
                        .ToDictionary(
                            g => g.Key, // La clave es el nombre del campo (ej. 'Password')
                            g => g.Select( e => e.ErrorMessage!).ToArray() // El valor es un array con todos sus errores
                        );

        return Results.ValidationProblem(errors);
    }

    var newUser = await authService.RegisterUserAsync(
        registerDto.Username,
        registerDto.Email,
        registerDto.Password
    );

    if (newUser is null)
    {
        return Results.Conflict("Usurio con ese nombre o correo ya existe!");
    }

    return Results.StatusCode(201);
});

// Post: Login de usuario
app.MapPost("/api/auth/login", async (LoginUserDto loginDto, AuthService authService, IConfiguration config) =>
{
    var user = await authService.LoginUserAsync(loginDto.Username, loginDto.Password);

    if (user == null)
    {
        return Results.Unauthorized(); // <- Usuario no encontrado o contraseña incorrecta
    }

    // Generar el JWT si las credenciales son correctas 
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    var claims = new[]{
        new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
        new Claim(JwtRegisteredClaimNames.Name, user.Username),
        new Claim(JwtRegisteredClaimNames.Email, user.Email),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
    };

    var token = new JwtSecurityToken(
                    issuer: config["Jwt:Issuer"],
                    audience: config["Jwt:Audience"],
                    claims: claims,
                    expires: DateTime.Now.AddHours(5),
                    signingCredentials: credentials);

    var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

    // Devolver el token JWT
    return Results.Ok(new { Token = tokenString });
    
});

app.Run();


