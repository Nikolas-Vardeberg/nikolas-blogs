using API.Data;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Services;

public class BlogService : IBlogsService
{
    private readonly ApplicationDbContext _dbContext;

    public BlogService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Blog>> GetBlogsAsync(string? searchString)
    {
        var query = _dbContext.Blogs.AsQueryable();

        if (!string.IsNullOrWhiteSpace(searchString))
        {
            query = query.Where(b => b.Title.Contains(searchString));
        }

        return await query.ToListAsync();
    }

    public async Task<bool> CreateBlogAsync(Blog blog)
    {
        await _dbContext.Blogs.AddAsync(blog);
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public async Task<Blog?> GetBlogBySlugAsync(string slug)
    {
        return await _dbContext.Blogs.FirstOrDefaultAsync(x => x.Slug == slug);
    }

    public async Task<bool> DeleteBlogAsync(Guid id)
    {
        var blog = await _dbContext.Blogs.FindAsync(id);

        if (blog == null)
        {
            throw new InvalidOperationException("Blog not found");
        }

        _dbContext.Blogs.Remove(blog);
        await _dbContext.SaveChangesAsync();

        return true;
    }

    public async Task<bool> UpdateBlogAsync(Blog blog)
    {
        _dbContext.Blogs.Update(blog);
        return await _dbContext.SaveChangesAsync() > 0;
    }
}