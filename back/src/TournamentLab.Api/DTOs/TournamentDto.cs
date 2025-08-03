namespace TournamentLab.Api.DTOs
{
    public class TournamentDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public List<string> Participants { get; set; } = new List<string>();
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Tournament_Type { get; set; } = string.Empty;
        public int UserId { get; set; }
        public string Champion { get; set; } = string.Empty;
        public string ReasonCancellation { get; set; } = string.Empty;
    }
}