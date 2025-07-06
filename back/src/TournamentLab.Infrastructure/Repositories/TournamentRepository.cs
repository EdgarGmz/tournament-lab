using Microsoft.EntityFrameworkCore;
using TournamentLab.Core.Entities;
using TournamentLab.Core.Services;
using TournamentLab.Infrastructure.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TournamentLab.Infrastructure.Repositories
{
    public class TournamentRepository : ITournamentRepository
    {
        private readonly TournamentLabDbContext _context;

        public TournamentRepository(TournamentLabDbContext context)
        {
            _context = context;
        }

        public async Task AddTournamentAsync(Tournament tournament)
        {
            await _context.Tournaments.AddAsync(tournament);
        }

        public async Task<Tournament?> GetTournamentByIdAsync(int tournamentId)
        {
            return await _context.Tournaments.FindAsync(tournamentId);
        }

        public async Task<IEnumerable<Tournament>> GetTournamentByUserIdAsync(int userId)
        {
            return await _context.Tournaments
                                .Where(t => t.UserId == userId)
                                .ToListAsync();
        }

        public async Task SaveChangeAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}