using Microsoft.EntityFrameworkCore;
using TournamentLab.Core.Entities;

namespace TournamentLab.Infrastructure.Data
{
    public class TournamentLabDbContext : DbContext
    {
        public TournamentLabDbContext(DbContextOptions<TournamentLabDbContext> options) : base(options)
        {

        }

        public DbSet<Tournament> Tournaments { get; set; }
    }
}