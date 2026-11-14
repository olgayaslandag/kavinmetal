# Docker Komutları

## Image Build
docker compose build

## Uygulamayı Başlat
docker compose up -d

## Logları İzle
docker compose logs -f

## Uygulamayı Durdur ve Temizle
docker compose down

## Image'ı Sil
docker rmi kavin-web:latest

## Health Check (manuel)
curl -I http://localhost:3005

## Not
Docker daemon çalışmıyorsa (ör. macOS'ta Docker Desktop kapalı), başlatmak için:
open -a Docker