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

app.Run();


