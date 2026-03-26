# Tizzle Ticket Landing Page

Landing page untuk Tizzle Ticket - On-Chain Event Ticketing di Solana.

## Deploy di Dokploy

### Cara 1: Deploy dari Git Repository

1. Login ke dashboard Dokploy Anda
2. Buat aplikasi baru
3. Pilih "Git" sebagai sumber
4. Masukkan URL repository ini
5. Dokploy akan otomatis mendeteksi Dockerfile
6. Klik "Deploy"

### Cara 2: Deploy Manual dengan Docker

```bash
# Build image
docker build -t tizzle-ticket .

# Run container
docker run -d -p 80:80 tizzle-ticket
```

### Cara 3: Deploy dengan Docker Compose

```bash
docker-compose up -d
```

## Teknologi

- HTML5 + CSS3
- Nginx (untuk serving static files)
- Docker (untuk containerization)

## Port

Aplikasi berjalan di port 80 secara default.
