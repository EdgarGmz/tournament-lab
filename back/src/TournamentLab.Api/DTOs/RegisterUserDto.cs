using System.ComponentModel.DataAnnotations;

namespace TournamentLab.Api.DTOs
{
    // DTO: Data Transfer Object
    // Este objeto se utiliza para transferir datos entre la API y el cliente
    public class RegisterUserDto
    {
        public required string Username { get; set; }

        [EmailAddress]
        public required string Email { get; set; }


        [StringLength(100, MinimumLength = 8)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,100}$",
        ErrorMessage = "La contraseña debe contener almenos una mayúscula, una minúscula, un número y un caracter especial. Y su longitud debe ser mínimo 8 caracteres.")]
        public required string Password { get; set; }

    }
}