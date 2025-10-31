namespace API.DTOS.Blogs;

public class CreateBlogDto
{
    public string Title { get; set; } = String.Empty;
    public string Slug { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Content { get; set; } = String.Empty;
}