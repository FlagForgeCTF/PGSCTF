using PGSCTF.Models.Request.Admin;

namespace PGSCTF.Repositories.Interface;

public interface ILogRepository : IRepository
{
    /// <summary>
    /// Get logs with pagination and optional level filtering
    /// </summary>
    /// <param name="skip"></param>
    /// <param name="count"></param>
    /// <param name="level"></param>
    /// <param name="token"></param>
    /// <returns></returns>
    public Task<LogMessageModel[]> GetLogs(int skip, int count, string? level, CancellationToken token);
}
