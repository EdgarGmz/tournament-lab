using System.ComponentModel.DataAnnotations;

namespace TournamentLab.Api.DTOs
{
    public class CreateTournamentDto
    {
        public string? Name { get; set; }

        public string? Status { get; set; }

        public List<string>? Participants { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [StringLength(1000, ErrorMessage = "La descripción no puede tener más de 1000 caracteres")]
        public string? Description { get; set; }

        public string? Tournament_Type { get; set; }

        public string? Champion { get; set; }
        public string? ReasonCancellation { get; set; }
    }
}