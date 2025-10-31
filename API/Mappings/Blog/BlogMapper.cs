using API.DTOS.Blogs;
using Riok.Mapperly.Abstractions;

namespace API.Mappings.Jobs;

[Mapper]
public static partial class JobMapper
{
    public static partial BlogDto ToDto(this Models.Blog blog);

    public static partial List<BlogDto> ToDtos(this List<Models.Blog> blog);
}