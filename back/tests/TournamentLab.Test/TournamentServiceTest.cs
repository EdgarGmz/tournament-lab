using Moq;
using TournamentLab.Core.Entities;
using TournamentLab.Core.Services;
using System;
using System.Threading.Tasks;
using Xunit;

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
            var userId = 1;
            var startDate = DateTime.UtcNow;
            var endDate = DateTime.UtcNow.AddDays(7);
            var tournamentType = "Sports";

            // Act: Ejecutar el método que queremos probar 
            var result = await _service.CreateTournamentAsync(tournamentName, description, userId, startDate, endDate, tournamentType);

            // Assert: Verificar que el resultado es el esperado
            Assert.NotNull(result);
            Assert.Equal(tournamentName, result.Name);
            Assert.Equal("Upcoming", result.Status);

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
            var userId = 1;
            var startDate = DateTime.UtcNow;
            var endDate = DateTime.UtcNow.AddDays(7);
            var tournamentType = "Sports";

            // Act & Assert: Verificar que se lanza la excepción correcta
            await Assert.ThrowsAsync<ArgumentException>(() =>
                _service.CreateTournamentAsync(emptyName, description, userId, startDate, endDate, tournamentType));

        }

        [Fact]
        public async Task CreateTournamentAsync_ShouldThrowArgumentException_WhenEndDateIsBeforeStartDate()
        {
            // Arrange
            var name = "Torneo con fechas inválidas";
            var description = "Descripción";
            var userId = 1;
            var startDate = DateTime.UtcNow;
            var invalidEndDate = DateTime.UtcNow.AddDays(-1);
            var tournamentType = "Sports";

            // Act & Assert: Verificar que se lanza la excepción correcta
            await Assert.ThrowsAsync<ArgumentException>(() =>
                _service.CreateTournamentAsync(name, description, userId, startDate, invalidEndDate, tournamentType));
        }
    }
}


