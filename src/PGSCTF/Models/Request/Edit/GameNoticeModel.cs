using System.ComponentModel.DataAnnotations;

namespace PGSCTF.Models.Request.Edit;

/// <summary>
/// Game notice (Edit)
/// </summary>
public class GameNoticeModel
{
    /// <summary>
    /// Notice content
    /// </summary>
    [Required(ErrorMessageResourceName = nameof(Resources.Program.Model_ContentRequired),
        ErrorMessageResourceType = typeof(Resources.Program))]
    public string Content { get; set; } = string.Empty;
}
