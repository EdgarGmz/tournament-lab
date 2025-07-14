using System.ComponentModel.DataAnnotations;

namespace TournamentLab.Api.DTOs
{
    public class CreateTournamentDto
    {
        [Required(ErrorMessage = "El nombre del torneo debe ser obligatorio")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "El nombre del torneo debe tener entre 5 y 100 letras.")]
        public string Name { get; set; }

        public string Status { get; set; }

        [Required]
        public List<string> Participants { get; set; }

        [Required(ErrorMessage = "La fecha de inicio debe ser obligatoria")]
        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [StringLength(1000, ErrorMessage = "La descripción no puede tener más de 1000 caracteres")]
        public string Description { get; set; } = string.Empty;

        [Required(ErrorMessage = "El tipo de torneo es obligatorio")]
        public string Tournament_Type { get; set; } = string.Empty;

        public string? Champion { get; set; }
        public string? ReasonCancellation { get; set; }
    }
}