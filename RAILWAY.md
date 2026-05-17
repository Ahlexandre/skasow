# Deploiement Railway

Ce projet se deploie en trois services Railway dans le meme projet :

1. `Postgres` : base de donnees Railway.
2. `api` : backend NestJS/Prisma, racine `backend`.
3. `web` : frontend React/Vite, racine du repo.

## 1. Backend API

Dans Railway, creer un service depuis le repo GitHub et regler :

- Root Directory : `backend`
- Build : Dockerfile detecte automatiquement depuis `backend/Dockerfile`
- Public domain : generer une URL Railway, par exemple `https://api-production.up.railway.app`

Variables du service API :

```env
NODE_ENV=production
DATABASE_URL=${{Postgres.DATABASE_URL}}
JWT_ACCESS_SECRET=mettre_une_valeur_aleatoire_de_plus_de_32_caracteres
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN_DAYS=30
CORS_ORIGIN=https://URL_DU_FRONTEND_RAILWAY
RATE_LIMIT_TTL=60
RATE_LIMIT_LIMIT=100
```

Le backend lance `prisma migrate deploy` au demarrage via le Dockerfile.

## 2. Frontend Web

Creer un second service depuis le meme repo GitHub et regler :

- Root Directory : laisser vide ou `/`
- Build : Dockerfile detecte automatiquement depuis `Dockerfile`
- Public domain : generer une URL Railway, par exemple `https://web-production.up.railway.app`

Variables du service frontend :

```env
VITE_API_URL=https://URL_DE_L_API_RAILWAY
```

`VITE_API_URL` est une variable de build Vite : apres modification, redeployer le service frontend.

## 3. CORS

Une fois l'URL frontend connue, retourner dans le service API et mettre :

```env
CORS_ORIGIN=https://URL_DU_FRONTEND_RAILWAY
```

Puis redeployer l'API.

## 4. Uploads d'annonces

Les images d'annonces sont stockees dans `/app/uploads` cote API.
Sur Railway, ajouter un Volume au service API avec :

```text
Mount path: /app/uploads
```

Sans volume, les images peuvent disparaitre lors d'un redeploiement.

## 5. Verification

Verifier ces URLs apres deploiement :

- API health : `https://URL_DE_L_API_RAILWAY/health`
- Swagger : `https://URL_DE_L_API_RAILWAY/docs`
- Frontend : `https://URL_DU_FRONTEND_RAILWAY`

Si le frontend affiche une erreur de requete, verifier d'abord `VITE_API_URL` et `CORS_ORIGIN`.
