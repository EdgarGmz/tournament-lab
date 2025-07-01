using Microsoft.EntityFrameworkCore;
using TournamentLab.Core.Entities;
using TournamentLab.Infrastructure.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TournamentLabDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    using (var scope = app.Services.CreateScope())
    {
        var dbContext = scope.ServiceProvider.GetRequiredService<TournamentLabDbContext>();
        dbContext.Database.Migrate();
    }
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapPost("/api/tournaments", async (Tournament tournament, TournamentLabDbContext dbContext) =>
{
    dbContext.Tournaments.Add(tournament);
    await dbContext.SaveChangesAsync();
    return Results.Created($"/api/tournaments/{tournament.Id}", tournament);
});

app.MapGet("/api/tournaments", async (TournamentLabDbContext dbContext) =>
{   
    var tournaments = await dbContext.Tournaments.ToListAsync();
    return Results.Ok(tournaments);
});

app.MapGet("/api/tournaments/{id}", async (int id, TournamentLabDbContext dbContext) =>
{
    var tournament = await dbContext.Tournaments.FindAsync(id);
    if (tournament == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(tournament);
});

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
    return Results.Ok(tournament);
});

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
});


app.Run();


