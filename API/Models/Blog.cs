using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;

public class Blog
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    
    public string Title { get; set; } = string.Empty;
    
    [Required]
    [MaxLength(96)]
    public string Slug { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}