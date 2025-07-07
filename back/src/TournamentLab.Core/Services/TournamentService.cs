using TournamentLab.Core.Entities;

namespace TournamentLab.Core.Services
{
    public class TournamentService
    {
        private readonly ITournamentRepository _tournamentRepository;

        public TournamentService(ITournamentRepository tournamentRespository)
        {
            _tournamentRepository = tournamentRespository;
        }

        public async Task<Tournament?> GetTournamentByIdAsync(int id)
        {
            return await _tournamentRepository.GetTournamentByIdAsync(id);
        }

        public async Task<Tournament> CreateTournamentAsync(
            string name,
            string description,
            List<string> participants,
            int userId,
            DateTime startDate,
            DateTime? endDate,
            string tournamentType)
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
                Participants = participants,
                UserId = userId,
                StartDate = startDate,
                EndDate = endDate ?? startDate, // <- Si endDate no tiene valor, usamos la fecha de inicio por defecto.
                Status = "Upcoming",
                Tournament_Type = tournamentType
            };

            await _tournamentRepository.AddTournamentAsync(tournament);
            await _tournamentRepository.SaveChangeAsync();

            return tournament;
        }

        public async Task<IEnumerable<Tournament>> GetAllTournamentsAsync()
        {
            return await _tournamentRepository.GetAllTournamentsAsync();
        }

        public async Task<Tournament?> UpdateTournamentAsync(
            int id,
            string name,
            string description,
            List<string> participants,
            DateTime startDate,
            DateTime? endDate,
            string tournamentType
        )
        {
            var existingTournament = await _tournamentRepository.GetTournamentByIdAsync(id);
            if (existingTournament == null)
            {
                return null;
            }

            // Actualizar la propiedades de la entidad con los parámetros recibidos
            existingTournament.Name = name;
            existingTournament.Description = description;
            existingTournament.Participants = participants;
            existingTournament.StartDate = startDate;
            existingTournament.EndDate = endDate ?? existingTournament.EndDate;
            existingTournament.Tournament_Type = tournamentType;

            await _tournamentRepository.SaveChangeAsync();

            return existingTournament;

        }

        public async Task<bool> DeleteTournamentAsync(int id)
        {
            return await _tournamentRepository.DeleteTournamentAsync(id);
        }
    }
}