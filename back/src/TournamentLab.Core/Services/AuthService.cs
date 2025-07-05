using TournamentLab.Core.Entities;
using static BCrypt.Net.BCrypt;

namespace TournamentLab.Core.Services
{
    public class AuthService
    {
        private readonly IAuthRepository _authRepository;

        // Usamos inyección de dependencias para obtener el repositorio
        public AuthService(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        // Método asíncrono para registrar usuario
        public async Task<User?> RegisterUserAsync(string username, string email, string password)
        {
            // Validar si el usuario ya existe usando el repositorio 
            var userExists = await _authRepository.GetUserByUsernameOrEmailAsync(username, email);
            if (userExists != null)
            {
                return null;
            }

            // Hashear la contraseña
            var passwordHash = HashPassword(password);

            // Crea el nuevo usuario
            var newUser = new User
            {
                Username = username,
                Email = email,
                PasswordHash = passwordHash
            };

            // Guardar en la base de datos usando el repositorio
            await _authRepository.AddUserAsync(newUser);
            await _authRepository.SaveChangesAsync();

            return newUser;
        }

        // Método asíncrono para iniciar sesión de un usuario 
        public async Task<User?> LoginUserAsync(string username, string password)
        {
            // Buscar el usaurio
            var user = await _authRepository.GetUserByUsernameOrEmailAsync(username, username); // <- busca por username o email
            if (user == null)
            {
                return null;
            }

            // Verificar la contraseña
            if (!Verify(password, user.PasswordHash))
            {
                return null; // <- Contraseña Incorrecta
            }

            return user; // <- Devolvemos el usuario si las credenciales son correctas
        }
    }
}