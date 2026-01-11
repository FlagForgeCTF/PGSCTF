using PGSCTF.Middlewares;
using Microsoft.AspNetCore.Mvc;

namespace PGSCTF.Controllers;

/// <summary>
/// Exercise related APIs
/// </summary>
[RequireUser]
[ApiController]
[Route("api/[controller]")]
[ProducesResponseType(typeof(RequestResponse), StatusCodes.Status401Unauthorized)]
[ProducesResponseType(typeof(RequestResponse), StatusCodes.Status403Forbidden)]
public class ExerciseController : ControllerBase
{
    // TODO: exercise mode support
}
