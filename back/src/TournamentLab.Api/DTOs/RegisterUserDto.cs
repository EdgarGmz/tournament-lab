namespace TournamentLab.Api.DTOs
{
    // DTO: Data Transfer Object
    // Este objeto se utiliza para transferir datos entre la API y el cliente
    public class RegisterUserDto
    {
        public required string Username { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }

    }
}