using System.ComponentModel.DataAnnotations;

namespace PGSCTF.Models.Request.Game;

/// <summary>
/// Flag submission
/// </summary>
public class FlagSubmitModel
{
    /// <summary>
    /// Flag content
    /// </summary>
    [Required(ErrorMessageResourceName = nameof(Resources.Program.Model_FlagRequired),
        ErrorMessageResourceType = typeof(Resources.Program))]
    public string Flag { get; set; } = string.Empty;
}
