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

var builder = WebApplication.CreateBuilder(args);

// Configurar Servicios
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

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

// ENDPOINTS - TOURNAMENTS

// Endpoint de pruebas
app.MapGet("/", () => "Api is runnig!");

// Post: Crear un nuevo torneo
app.MapPost("/api/tournaments", async (Tournament tournament, TournamentLabDbContext dbContext) =>
{
    dbContext.Tournaments.Add(tournament);
    await dbContext.SaveChangesAsync();
    return Results.Created($"/api/tournaments/{tournament.Id}", tournament);
}).RequireAuthorization();

// Get: Obtener todos los torneos 
app.MapGet("/api/tournaments", async (TournamentLabDbContext dbContext) =>
{   
    var tournaments = await dbContext.Tournaments.ToListAsync();
    return Results.Ok(tournaments);
});

// Get: Obtener un torneo por ID
app.MapGet("/api/tournaments/{id}", async (int id, TournamentLabDbContext dbContext) =>
{
    var tournament = await dbContext.Tournaments.FindAsync(id);
    return tournament is not null ? Results.Ok(tournament) : Results.NotFound();
});

// Put: Actualizar un torneo existente
app.MapPut("/api/tournaments/{id}", async (int id, Tournament updatedTournament, TournamentLabDbContext dbContext) =>
{
    var tournament = await dbContext.Tournaments.FindAsync(id);
    if (tournament == null)
    {
        return Results.NotFound();
    }

    tournament.Name = updatedTournament.Name;
    tournament.Status = updatedTournament.Status;
    tournament.Participants = updatedTournament.Participants;
    tournament.StartDate = updatedTournament.StartDate;
    tournament.EndDate = updatedTournament.EndDate;
    tournament.Description = updatedTournament.Description;
    tournament.Tournament_Type = updatedTournament.Tournament_Type;

    await dbContext.SaveChangesAsync();
    return Results.NoContent();
}).RequireAuthorization();

// Delete: Eliminar un torneo por ID
app.MapDelete("/api/tournaments/{id}", async (int id, TournamentLabDbContext dbContext) =>
{
    var tournament = await dbContext.Tournaments.FindAsync(id);
    if (tournament == null)
    {
        return Results.NotFound();
    }

    dbContext.Tournaments.Remove(tournament);
    await dbContext.SaveChangesAsync();
    return Results.NoContent();
}).RequireAuthorization();


// ENDPOINTS - USERS
// Post: Crear un nuevo usuario
app.MapPost("/api/auth/register", async (RegisterUserDto registerDto, TournamentLabDbContext dbContext) =>
{
    // Validar si el usuario existe
    var userExist = await dbContext.Users.AnyAsync(u => u.Username == registerDto.Username || u.Email == registerDto.Email);
    if (userExist)
    {
        return Results.Conflict("Usurio con ese nombre o correo ya existe!");
    }

    // Hashear la contraseña
    var passwordHash = HashPassword(registerDto.Password);

    // Crear el nuevo usuario
    var newUser = new User
    {
        Username = registerDto.Username,
        Email = registerDto.Email,
        PasswordHash = passwordHash
    };

    // Guardar la base de datos
    dbContext.Users.Add(newUser);
    await dbContext.SaveChangesAsync();

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


