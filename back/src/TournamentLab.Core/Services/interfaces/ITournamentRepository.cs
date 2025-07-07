using TournamentLab.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TournamentLab.Core.Services
{
    public interface ITournamentRepository
    {
        // Para crear un torneo
        Task AddTournamentAsync(Tournament tournament);

        // Para obtener todos los torneos
        Task<IEnumerable<Tournament>> GetAllTournamentsAsync();

        // Para obtener un torneo por su Id
        Task<Tournament?> GetTournamentByIdAsync(int id);

        // Para eliminar un torneo por su Id
        Task<bool> DeleteTournamentAsync(int id);

        // Para obtener un torneo por su Id de Usuario
        Task<IEnumerable<Tournament>> GetTournamentByUserIdAsync(int userId);
        
        // Para guardar los cambios en la base de datos
        Task SaveChangeAsync();
    }
}