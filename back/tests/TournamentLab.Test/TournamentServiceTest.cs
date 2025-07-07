using Moq;
using TournamentLab.Core.Entities;
using TournamentLab.Core.Services;

namespace TournamentLab.Test
{
    public class TournamentServiceTest
    {
        private readonly Mock<ITournamentRepository> _mockRepo;
        private readonly TournamentService _service;

        public TournamentServiceTest()
        {
            // Arrange: Crear el mock del repositorio
            _mockRepo = new Mock<ITournamentRepository>();
            // Arrange: Crear una instancia del servicio, inyectando el mock
            _service = new TournamentService(_mockRepo.Object);
        }

        [Fact]
        public async Task CreateTournamentAsync_ShouldSucceed_WhenDataIsValid()
        {
            // Arrange 
            var tournamentName = "Torneo de Verano";
            var description = "Torneo de prueba";
            var participants = new List<string> { "Alice", "Bob" };
            var userId = 1;
            var startDate = DateTime.UtcNow;
            var endDate = DateTime.UtcNow.AddDays(7);
            var tournamentType = "Sports";

            // Act: Ejecutar el método que queremos probar 
            var result = await _service.CreateTournamentAsync(
                tournamentName,
                description,
                participants,
                userId,
                startDate,
                endDate,
                tournamentType);

            // Assert: Verificar que el resultado es el esperado
            Assert.NotNull(result);
            Assert.Equal(tournamentName, result.Name);
            Assert.Equal(participants, result.Participants);

            // Verificar que los métodos del repositorio fueron llamados 
            _mockRepo.Verify(r => r.AddTournamentAsync(It.IsAny<Tournament>()), Times.Once);
            _mockRepo.Verify(r => r.SaveChangeAsync(), Times.Once);
        }

        [Fact]
        public async Task CreateTournamentAsync_ShouldThrowArgumentException_WhenNameIsEmpty()
        {
            // Arrange 
            var emptyName = ""; // <. Nombre inválido
            var description = "Descripción";
            var participants = new List<string>();
            var userId = 1;
            var startDate = DateTime.UtcNow;
            var endDate = DateTime.UtcNow.AddDays(7);
            var tournamentType = "Sports";

            // Act & Assert: Verificar que se lanza la excepción correcta
            await Assert.ThrowsAsync<ArgumentException>(() =>
                _service.CreateTournamentAsync(emptyName, description, participants, userId, startDate, endDate, tournamentType));

        }

        [Fact]
        public async Task CreateTournamentAsync_ShouldThrowArgumentException_WhenEndDateIsBeforeStartDate()
        {
            // Arrange
            var name = "Torneo con fechas inválidas";
            var description = "Descripción";
            var participants = new List<string>();
            var userId = 1;
            var startDate = DateTime.UtcNow;
            var invalidEndDate = DateTime.UtcNow.AddDays(-1);
            var tournamentType = "Sports";

            // Act & Assert: Verificar que se lanza la excepción correcta
            await Assert.ThrowsAsync<ArgumentException>(() =>
                _service.CreateTournamentAsync(name, description, participants, userId, startDate, invalidEndDate, tournamentType));
        }

        [Fact]
        public async Task GetAllTournamentsAsync_ShouldReturnAllTournaments()
        {
            // Arrange
            var tournaments = new List<Tournament>
            {
                new Tournament{ Id = 1, Name="Torneo 1" },
                new Tournament{ Id = 2, Name="Torneo 2" },

            };
            _mockRepo.Setup(r => r.GetAllTournamentsAsync()).ReturnsAsync(tournaments);

            // Act 
            var result = await _service.GetAllTournamentsAsync();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count());
        }

        [Fact]
        public async Task GetTournamentByIdAsync_ShouldReturnTournament_WhenTournamentExists()
        {
            // Arrange
            var tournamentId = 1;
            var expectedTournament = new Tournament { Id = tournamentId, Name = "Test Tournament" };
            _mockRepo.Setup(r => r.GetTournamentByIdAsync(It.IsAny<int>())).ReturnsAsync(expectedTournament);

            // Act
            var result = await _service.GetTournamentByIdAsync(tournamentId);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(tournamentId, result.Id);
        }

        [Fact]
        public async Task GetTournamentByIdAsync_ShouldReturnNull_WhenTournamentDoesNotExists()
        {
            // Arrange
            var tournamentId = 99;
            _mockRepo.Setup(r => r.GetTournamentByIdAsync(tournamentId)).ReturnsAsync((Tournament)null);

            // Act 
            var result = await _service.GetTournamentByIdAsync(tournamentId);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task UpdateTournamentAsync_ShouldSucceed_WhenTournamentExists()
        {
            // Arrange
            var tournamentId = 1;
            var existingTournament = new Tournament { Id = tournamentId, Name = "Old Name" };
            _mockRepo.Setup(r => r.GetTournamentByIdAsync(It.IsAny<int>())).ReturnsAsync(existingTournament);

            // Act
            var result = await _service.UpdateTournamentAsync(tournamentId,
                                    "New Name",
                                    "New Desc",
                                    new List<string>(),
                                    DateTime.UtcNow,
                                    null,
                                    "New TournamentType");

            // Asert
            Assert.NotNull(result);
            Assert.Equal("New Name", result.Name);
            _mockRepo.Verify(r => r.SaveChangeAsync(), Times.Once);
        }

        [Fact]
        public async Task UpdateTournamentAsync_ShouldReturnNull_WhenTournamentDoesNotExists()
        {
            // Arrange
            var tournamentId = 99;
            _mockRepo.Setup(r => r.GetTournamentByIdAsync(tournamentId)).ReturnsAsync((Tournament)null);

            // Act
            var result = await _service.UpdateTournamentAsync(tournamentId, "New Name",
                                    "New Desc",
                                    new List<string>(),
                                    DateTime.UtcNow,
                                    null,
                                    "New Type");
            // Assert
            Assert.Null(result);
            _mockRepo.Verify(r => r.SaveChangeAsync(), Times.Never);
        }

        [Fact]
        public async Task DeleteTournamentAsync_ShouldReturnTrue_WhenDeletionIsSuccessful()
        {
            // Arrange
            var tournamentId = 1;
            _mockRepo.Setup(r => r.DeleteTournamentAsync(tournamentId)).ReturnsAsync(true);

            // Act
            var result = await _service.DeleteTournamentAsync(tournamentId);

            // Assert
            Assert.True(result);
        }

        [Fact]
        public async Task DeleteTournamentAsync_ShouldReturnFalse_WhenTournamentDoesNotExists()
        {
            // Arrange
            var tournamentId = 99;
            _mockRepo.Setup(r => r.DeleteTournamentAsync(tournamentId)).ReturnsAsync(false);

            // Act
            var result = await _service.DeleteTournamentAsync(tournamentId);

            // Assert
            Assert.False(result);
        }
    }
}


