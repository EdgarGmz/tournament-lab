using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace TournamentLab.Infrastructure.Data
{
    public class TournamentLabDbContextFactory : IDesignTimeDbContextFactory<TournamentLabDbContext>
    {
        public TournamentLabDbContext CreateDbContext(string[] args)
        {
            // Construye la configuración para poder leer la cadena de conexión
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "..", "TournamentLab.Api"))
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile("appsettings.Development.json", optional: true) // Para desarrollo
                .Build();

            var builder = new DbContextOptionsBuilder<TournamentLabDbContext>();
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            // Asegúrate de que la cadena de conexión no sea nula
            if (string.IsNullOrEmpty(connectionString))
            {
                throw new InvalidOperationException("No se encontró la cadena de conexión 'DefaultConnection'.");
            }

            builder.UseSqlServer(connectionString);

            return new TournamentLabDbContext(builder.Options);
        }
    }
}