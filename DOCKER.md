# Docker

Cette configuration lance la stack applicative complete :

- `frontend` : React/Vite servi par Caddy
- `backend` : API NestJS/Prisma
- `database` : PostgreSQL 16
- `database_data` : volume de persistance PostgreSQL
- `backend_uploads` : volume de persistance des fichiers uploades dans `/app/uploads`

## Lancement local

Copier l'exemple d'environnement Docker :

```bash
cp .env.docker.example .env.docker
```

Demarrer la stack depuis la racine du projet :

```bash
docker compose --env-file .env.docker up --build
```

URLs locales :

- Frontend : `http://localhost:8080`
- Backend : `http://localhost:3001`
- Swagger : `http://localhost:3001/docs`
- Healthcheck : `http://localhost:3001/health`
- PostgreSQL local : `localhost:5434`

Le backend applique `prisma migrate deploy` au demarrage du conteneur.

## Arret

Arreter les conteneurs sans supprimer les volumes :

```bash
docker compose --env-file .env.docker down
```

Supprimer aussi les volumes, donc la base et les uploads :

```bash
docker compose --env-file .env.docker down -v
```

## Note Vercel

Vercel ne deploie pas une stack Docker Compose avec base PostgreSQL et volume
persistant. Pour un deploiement avec ces conteneurs, il faut une plateforme qui
supporte Docker Compose ou des services Docker separes avec volumes persistants.

Sur Vercel, il faut garder le modele de `VERCEL.md` : frontend et backend en
projets separes, base PostgreSQL externe, et stockage externe pour les fichiers
comme Vercel Blob, S3 ou Cloudinary.
