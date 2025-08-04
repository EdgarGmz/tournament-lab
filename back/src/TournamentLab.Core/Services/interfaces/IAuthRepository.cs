using TournamentLab.Core.Entities;

namespace TournamentLab.Core.Services
{
    public interface IAuthRepository
    {
        Task<User?> GetUserByUsernameOrEmailAsync(string username, string email);
        Task AddUserAsync(User user);
    }
}