.PHONY: build run stop logs clean rebuild shell db-shell redis-shell help

# Default admin password (change in production!)
ADMIN_PASSWORD ?= Admin@123

help:
	@echo "PGSCTF Development Commands"
	@echo ""
	@echo "  make build     - Build Docker images"
	@echo "  make run       - Start all services"
	@echo "  make stop      - Stop all services"
	@echo "  make logs      - View logs (follow mode)"
	@echo "  make clean     - Stop and remove containers, volumes"
	@echo "  make rebuild   - Clean rebuild of all images"
	@echo "  make shell     - Open shell in pgsctf container"
	@echo "  make db-shell  - Open psql shell in database"
	@echo "  make redis-shell - Open redis-cli shell"
	@echo ""
	@echo "Access the app at http://localhost:8080"

build:
	docker compose build

up:
	docker compose up -d
	@echo ""
	@echo "PGSCTF is starting..."
	@echo "Access at: http://localhost:8080"
	@echo "Default admin password: $(ADMIN_PASSWORD)"

down:
	docker compose down

logs:
	docker compose logs -f

clean:
	docker compose down -v --remove-orphans

rebuild: clean
	docker compose build --no-cache
	docker compose up -d

shell:
	docker compose exec pgsctf sh

db-shell:
	docker compose exec db psql -U PGSCTF -d PGSCTF

redis-shell:
	docker compose exec redis redis-cli
