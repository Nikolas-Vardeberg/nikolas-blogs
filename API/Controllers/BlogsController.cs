using System.Xml;
using API.DTOS.Blogs;
using API.Interfaces;
using API.Mappings.Jobs;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/blogs")]
public class BlogsController
{
    private readonly IBlogsService _blogService;

    public BlogsController(IBlogsService blogService)
    {
        _blogService = blogService;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<List<BlogDto>> Get([FromQuery] string? searchString)
    {
        var results = await _blogService.GetBlogsAsync(searchString);
        return results.ToDtos();
    }

    [HttpGet("{slug}")]
    [AllowAnonymous]
    public async Task<BlogDto> GetBySlug(string slug)
    {
        var blogBySlug = await _blogService.GetBlogBySlugAsync(slug);

        if (blogBySlug == null) throw new Exception("Blogs not found");

        return blogBySlug.ToDto();
    }

    [HttpPost]
    [AllowAnonymous]
    public async Task<BlogDto> Create([FromBody] CreateBlogDto dto)
    {
        var blog = new Blog()
        {
            Title = dto.Title,
            Description = dto.Description,
            Content = dto.Description,
            Slug = dto.Slug
        };

        var success = await _blogService.CreateBlogAsync(blog);
        if (!success) throw new Exception("Failed to create blog");
        return blog.ToDto();
    }

    [HttpDelete("{id}")]
    public async Task<bool> Delete(Guid id)
    {
        var success = await _blogService.DeleteBlogAsync(id);

        if (!success) throw new Exception("Failed to delete blog");

        return success;
    }

    [HttpPut("{id}")]
    public async Task<BlogDto> UpdateBlogAsync(Guid id, [FromBody] BlogDto dto)
    {
        var blog = new Blog()
        {
            Title = dto.Title,
            Description = dto.Description,
            Slug = dto.Slug,
            Content = dto.Content,
        };

        var success = await _blogService.UpdateBlogAsync(blog);

        if (!success) throw new Exception("Failed to update blog");

        return blog.ToDto();
    }
}