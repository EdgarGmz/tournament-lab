using TournamentLab.Core.Entities;
using System;
using System.Threading.Tasks;

namespace TournamentLab.Core.Services
{
    public class TournamentService
    {
        private readonly ITournamentRepository _tournamentRepository;

        public TournamentService(ITournamentRepository tournamentRespository)
        {
            _tournamentRepository = tournamentRespository;
        }

        public async Task<Tournament> CreateTournamentAsync(string name, string description, int userId, DateTime startDate, DateTime endDate, string tournamentType)
        {
            // Regla de negocio: Validar que el nombre no esté vacío
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentException("El nombre del torneo no puede estar vacío.", nameof(name));
            }

            //  Regla de negocio: Valildar que la fecha fin sea posterior a la de inicio.
            if (endDate <= startDate)
            {
                throw new ArgumentException("La fecha de finalización debe ser posterior a la fecha de inicio.", nameof(endDate));
            }

            var tournament = new Tournament
            {
                Name = name,
                Description = description,
                UserId = userId,
                StartDate = startDate,
                EndDate = endDate,
                Status = "Upcoming",
                Tournament_Type = tournamentType
            };

            await _tournamentRepository.AddTournamentAsync(tournament);
            await _tournamentRepository.SaveChangeAsync();

            return tournament;
        }
    }
}