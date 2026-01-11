using System.Diagnostics.CodeAnalysis;
using PGSCTF.Hubs.Clients;
using PGSCTF.Repositories.Interface;
using Microsoft.AspNetCore.SignalR;

namespace PGSCTF.Hubs;

[ExcludeFromCodeCoverage]
public class MonitorHub : Hub<IMonitorClient>
{
    public override async Task OnConnectedAsync()
    {
        var context = Context.GetHttpContext();

        if (context is null
            || !context.Request.Query.TryGetValue("game", out var gameId)
            || !int.TryParse(gameId, out var gId)
            || (!await ContextHelper.HasMonitor(context) && !await ContextHelper.HasValidToken(context)))
        {
            Context.Abort();
            return;
        }

        var gameRepository = context.RequestServices.GetRequiredService<IGameRepository>();
        if (!await gameRepository.HasGameAsync(gId))
        {
            Context.Abort();
            return;
        }

        await base.OnConnectedAsync();

        await Groups.AddToGroupAsync(Context.ConnectionId, $"Game_{gId}");
    }
}
