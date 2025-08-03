using System.Collections.Generic;

namespace TournamentLab.Core.Entities
{
    public class Tournament
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public List<string> Participants { get; set; } = new List<string>();
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Tournament_Type { get; set; } = string.Empty;
        public string? Champion { get; set; }
        public string? ReasonCancellation { get; set; }

        // Foregein Key
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }
}   