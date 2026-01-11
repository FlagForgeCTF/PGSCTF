using System.ComponentModel.DataAnnotations;

namespace PGSCTF.Models.Request.Game;

public class GameJoinModel
{
    /// <summary>
    /// Team ID for participation
    /// </summary>
    [Required]
    public int TeamId { get; set; }

    /// <summary>
    /// Division for participation
    /// </summary>
    public int? DivisionId { get; set; }

    /// <summary>
    /// Invitation code for participation
    /// </summary>
    public string? InviteCode { get; set; }
}
