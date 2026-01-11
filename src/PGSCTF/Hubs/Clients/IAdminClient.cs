using PGSCTF.Models.Request.Admin;

namespace PGSCTF.Hubs.Clients;

public interface IAdminClient
{
    /// <summary>
    /// 接收到广播日志信息
    /// </summary>
    public Task ReceivedLog(LogMessageModel log);
}
