using Moq;
using TournamentLab.Core.Entities;
using TournamentLab.Core.Services;
using TournamentLab.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using TournamentLab.Infrastructure.Repositories;

namespace TournamentLab.Test
{
    public class AuthServiceTests
    {
        // Prueba para verificar que un usuario se registró correctamente
        [Fact] // Indica que este es el método de prueba
        public async Task RegisterUserAsync_ShouldRegisterNewUser_WhenUserDoesNotExist()
        {
            // Arrange (Preparación): Configurar el entorno de prueba
            // Usamos la base de datos en memoria para que la prueba sea aislada y rápida
            var options = new DbContextOptionsBuilder<TournamentLabDbContext>()
                                .UseInMemoryDatabase(databaseName: "TestDb_RegisterNewUser") // Nombre único para cada prueba
                                .Options;

            // Creamos la instancia del contexto de la base de datos en memoria
            using (var dbContext = new TournamentLabDbContext(options))
            {
                // Creamos la instancia de nuestro repositorio de autenticación, pasándole el repositorio
                var authRepository = new AuthRepository(dbContext);
                var authService = new AuthService(authRepository);

                var username = "testuser";
                var email = "text@example.com";
                var password = "Password123";

                // Act (Acción): Ejecutar el método que queremos probar
                var result = await authService.RegisterUserAsync(username, email, password);

                // Assert (Verificación): Comprobar que el resultado es el esperado
                Assert.NotNull(result); // -> Verificamos que se devolvió un usuario (no es nulo)
                Assert.Equal(username, result.Username);  // -> Verificamos que el nombre de usuario es correcto
                Assert.Equal(email, result.Email); // -> Verificamos que el correo sea correcto

                // Verificamos que el usuario fue realmente añadido a la base de datos en memoria
                var userInDb = await dbContext.Users.FirstOrDefaultAsync(u => u.Username == username);
                Assert.NotNull(userInDb);
                Assert.Equal(username, userInDb.Username);

            }
        }

        // Para verificar que no se registra un usuario si ya existe
        [Fact]
        public async Task RegisterUserAsync_ShouldReturnNull_WhenUserAlreadyExists()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<TournamentLabDbContext>()
                                .UseInMemoryDatabase(databaseName: "TestDb_UserExists")
                                .Options;

            using (var dbContext = new TournamentLabDbContext(options))
            {
                // Añadimos al usuario directamente a la base de datos en memoria para simular que ya existe
                dbContext.Users.Add(new User { Username = "existinguser", Email = "existing@example.com", PasswordHash = "hashedpassword" });
                await dbContext.SaveChangesAsync();

                var authRepository = new AuthRepository(dbContext);
                var authService = new AuthService(authRepository);

                var username = "existinguser";
                var email = "existing@example.com";
                var password = "Password123!";

                // Act
                var result = await authService.RegisterUserAsync(username, email, password);

                // Assert
                Assert.Null(result); // -> Verificamos que el resultado es nulo (no se registró)

                // Verificamos que no se añadió un nuevo usuario con ese nombre
                var userCount = await dbContext.Users.CountAsync(u => u.Username == username);
                Assert.Equal(1, userCount);
                
            }
        }
    }
}