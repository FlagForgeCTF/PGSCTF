using System.Diagnostics.CodeAnalysis;
using PGSCTF.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace PGSCTF.Hubs;

[ExcludeFromCodeCoverage]
public class AdminHub : Hub<IAdminClient>
{
    public override async Task OnConnectedAsync()
    {
        var context = Context.GetHttpContext();

        if (context is null || !await ContextHelper.HasAdmin(context))
        {
            Context.Abort();
            return;
        }

        await base.OnConnectedAsync();
    }
}
