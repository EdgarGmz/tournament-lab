using TournamentLab.Core.Entities;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TournamentLab.Core.Services
{
    public interface ITournamentRepository
    {
        Task AddTournamentAsync(Tournament tournament);
        Task<Tournament?> GetTournamentByIdAsync(int tournamentId);
        Task<IEnumerable<Tournament>> GetTournamentByUserIdAsync(int userId);
        Task SaveChangeAsync();
    }
}