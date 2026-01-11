/*
 * PGS::CTF
 *
 * Copyright © 2022-present FlagForge
 *
 * This source code is licensed under the AGPLv3 license found in the LICENSE file
 * in the root directory of this source tree.
 *
 * Identifiers related to "PGSCTF" (including variations and derivations) are protected.
 * Examples include "PGSCTF", "PGS::CTF", "PGSCTF_FLAG", and similar constructs.
 *
 * Modifications to these identifiers are prohibited as per the LICENSE_ADDENDUM.txt
 */

global using PGSCTF.Models.Data;
global using PGSCTF.Utils;
global using static PGSCTF.Server;
global using AppDbContext = PGSCTF.Models.AppDbContext;
global using TaskStatus = PGSCTF.Utils.TaskStatus;
using System.Diagnostics.CodeAnalysis;
using System.Security.Cryptography;
using System.Text;
using PGSCTF.Extensions.Startup;
using PGSCTF.Models;
using Serilog;

Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
Log.Logger = LogHelper.GetInitLogger();

Banner();

var builder = WebApplication.CreateBuilder(args);

await PathHelper.EnsureDirsAsync(builder.Environment);

builder.ConfigureWebHost();
builder.ConfigureDatabase();
builder.ConfigureStorage();
builder.ConfigureCacheAndSignalR();
builder.ConfigureIdentity();
builder.ConfigureTelemetry();

builder.AddServiceConfigurations();
builder.AddCustomServices();
builder.AddWebServices();
builder.AddDevelopmentServices();

var app = builder.Build();

Log.Logger = app.GetLogger();

await app.RunPrelaunchWorkAsync();

app.UseMiddlewares();

await app.RunServerAsync();

namespace PGSCTF
{
    public class Program
    {
        [DynamicDependency(DynamicallyAccessedMemberTypes.All, typeof(DesignTimeAppDbContextFactory))]
        static Program()
        {
            using var stream = typeof(Program).Assembly
                .GetManifestResourceStream("PGSCTF.Resources.favicon.ico")!;
            DefaultFavicon = new byte[stream.Length];

            stream.ReadExactly(DefaultFavicon);
            DefaultFaviconHash = Convert.ToHexStringLower(SHA256.HashData(DefaultFavicon));
        }

        internal static byte[] DefaultFavicon { get; }
        internal static string DefaultFaviconHash { get; }
    }
}
