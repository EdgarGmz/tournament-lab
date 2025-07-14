using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TournamentLab.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddChampionAndReasonCancellationToTournament : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Champion",
                table: "Tournaments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReasonCancellation",
                table: "Tournaments",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Champion",
                table: "Tournaments");

            migrationBuilder.DropColumn(
                name: "ReasonCancellation",
                table: "Tournaments");
        }
    }
}
