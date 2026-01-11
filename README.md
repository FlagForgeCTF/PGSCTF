# PGS::CTF

An open source Capture The Flag (CTF) competition platform based on ASP.NET Core.


## Features

- Dynamic and static challenge types (attachments and containers)
- Dynamic scoring with customizable curves
- Team management with divisions and scoreboards
- Real-time competition notifications via SignalR
- Docker/Kubernetes container orchestration for challenges
- Traffic capture and forwarding capabilities
- Multi-language support
- Customizable branding and themes

## Quick Start

### Prerequisites

- Docker and Docker Compose
- PostgreSQL database (or use external like Prisma Postgres)
- Redis (included in docker-compose)

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pgsctf
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure `.env` with your settings:
```env
# Database connection (Npgsql format)
DATABASE_URL=Host=your-host;Port=5432;Database=pgsctf;Username=user;Password=password;SSL Mode=Require

# Admin account (created on first run)
ADMIN_PASSWORD=YourSecurePassword

# JWT Secret (generate with: openssl rand -base64 64)
Jwt__SecretKey=your-generated-secret

# XorKey for encryption (generate with: openssl rand -base64 16)
XorKey=your-generated-key

# Platform Branding
GlobalConfig__Title=PGS
GlobalConfig__Slogan=Hack for fun not for profit
```

4. Build and run:
```bash
make build
make up
```

5. Access at http://localhost:8080
   - Username: `Admin`
   - Password: (value from `ADMIN_PASSWORD`)

## Make Commands

| Command | Description |
|---------|-------------|
| `make build` | Build Docker images |
| `make up` | Start all services |
| `make down` | Stop all services |
| `make logs` | View logs (follow mode) |
| `make clean` | Remove containers and volumes |
| `make rebuild` | Full clean rebuild |
| `make shell` | Open shell in app container |
| `make redis-shell` | Open redis-cli |

## Configuration

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string (Npgsql format) |
| `ADMIN_PASSWORD` | Initial admin password |
| `Jwt__SecretKey` | JWT signing key |
| `XorKey` | Encryption key |
| `GlobalConfig__Title` | Platform name prefix |
| `GlobalConfig__Slogan` | Platform slogan |
| `GlobalConfig__Description` | SEO description |
| `GlobalConfig__FooterInfo` | Custom footer text |
| `EmailConfig__*` | SMTP settings for email verification |

### Container Provider

Configure Docker or Kubernetes for challenge containers:

```env
ContainerProvider__Type=Docker
ContainerProvider__DockerConfig__SwarmMode=false
```

## Tech Stack

- Backend: ASP.NET Core 10
- Frontend: React + Vite
- Database: PostgreSQL
- Cache: Redis
- Container Orchestration: Docker / Kubernetes

# PGSCTF
