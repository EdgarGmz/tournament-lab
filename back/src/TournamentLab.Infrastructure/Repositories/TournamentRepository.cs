using Microsoft.EntityFrameworkCore;
using TournamentLab.Core.Entities;
using TournamentLab.Core.Services;
using TournamentLab.Infrastructure.Data;

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

        public async Task<bool> DeleteTournamentAsync(int id)
        {
            var tournament = await _context.Tournaments.FindAsync(id);
            if (tournament == null)
            {
                return false;
            }

            _context.Tournaments.Remove(tournament);
            await SaveChangeAsync();
            return true;
        }

        public async Task<IEnumerable<Tournament>> GetAllTournamentsAsync()
        {
            return await _context.Tournaments.ToListAsync();
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