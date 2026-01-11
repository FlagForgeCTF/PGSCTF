using System.ComponentModel.DataAnnotations;
using PGSCTF.Services;

namespace PGSCTF.Models.Request.Account;

/// <summary>
/// Login
/// </summary>
public class LoginModel : ModelWithCaptcha
{
    /// <summary>
    /// Username or email
    /// </summary>
    [Required]
    public string UserName { get; set; } = string.Empty;

    /// <summary>
    /// Password
    /// </summary>
    [Required]
    public string Password { get; set; } = string.Empty;
}
