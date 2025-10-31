namespace API.DTOS.Blogs;

public class BlogDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = String.Empty;
    public string Slug { get; set; } = String.Empty;
    public string Description { get; set; } = String.Empty;
    public string Content { get; set; } = String.Empty;
}