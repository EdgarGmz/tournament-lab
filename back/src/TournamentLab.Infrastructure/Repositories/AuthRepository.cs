using Microsoft.EntityFrameworkCore;
using TournamentLab.Core.Entities;
using TournamentLab.Core.Services;
using TournamentLab.Infrastructure.Data;

namespace TournamentLab.Infrastructure.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly TournamentLabDbContext _dbContext;

        public AuthRepository(TournamentLabDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User?> GetUserByUsernameOrEmailAsync(string username, string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == username || u.Email == email);
        }

        public async Task AddUserAsync(User user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
        }
    }
}