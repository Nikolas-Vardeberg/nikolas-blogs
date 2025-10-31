using API.Models;

namespace API.Interfaces;

public interface IBlogsService
{
    Task<List<Blog>> GetBlogsAsync(string? searchString);
    Task<bool> CreateBlogAsync(Blog blog);
    Task<Blog?> GetBlogBySlugAsync(string slug);
    Task<bool> DeleteBlogAsync(Guid id);
    Task<bool> UpdateBlogAsync(Blog blog);
}