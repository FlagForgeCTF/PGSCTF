# Build stage for backend (frontend pre-built)
FROM mcr.microsoft.com/dotnet/sdk:10.0-alpine AS backend
WORKDIR /src

# Install Node.js and pnpm (required by PGSCTF.csproj build targets)
RUN apk add --no-cache nodejs npm && npm install -g pnpm

COPY src/Directory.Packages.props ./
COPY src/PGSCTF/PGSCTF.csproj ./PGSCTF/
RUN dotnet restore ./PGSCTF/PGSCTF.csproj
COPY src/PGSCTF/ ./PGSCTF/
# Use pre-built frontend
COPY src/PGSCTF/ClientApp/build ./PGSCTF/wwwroot/
WORKDIR /src/PGSCTF
RUN dotnet publish -c Release -o /app/publish --no-restore

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0-alpine AS final
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false \
    LC_ALL=en_US.UTF-8

WORKDIR /app
RUN apk add --update --no-cache wget libpcap icu-data-full icu-libs \
    ca-certificates libgdiplus tzdata krb5-libs && \
    update-ca-certificates

COPY --from=backend /app/publish .

EXPOSE 8080

HEALTHCHECK --interval=5m --timeout=3s --start-period=10s --retries=1 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/healthz || exit 1

ENTRYPOINT ["dotnet", "PGSCTF.dll"]
