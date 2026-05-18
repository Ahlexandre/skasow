# Deploiement Vercel

Le projet peut etre deploye avec deux projets Vercel separes :

1. `api` : backend NestJS/Prisma, racine `backend`.
2. `web` : frontend React/Vite, racine du repo.

## Backend API

Dans Vercel, creer un projet depuis le repo GitHub et regler :

- Root Directory : `backend`
- Framework Preset : Other
- Build Command : laisser Vercel utiliser `backend/vercel.json`

Variables du projet API :

```env
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_ACCESS_SECRET=mettre_une_valeur_aleatoire_de_plus_de_32_caracteres
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN_DAYS=30
CORS_ORIGIN=https://skasow-bo2f.vercel.app
RATE_LIMIT_TTL=60
RATE_LIMIT_LIMIT=100
```

Appliquer les migrations Prisma sur la base de production avant ou pendant le
deploiement :

```bash
npm run prisma:deploy
```

Verification apres deploiement :

- API health : `https://skasow.vercel.app/health`
- Swagger : `https://skasow.vercel.app/docs`

## Frontend Web

Dans le projet Vercel du frontend :

- Root Directory : laisser vide ou `/`
- Build Command : `npm run build`
- Output Directory : `dist`

Variable du projet frontend :

```env
VITE_API_URL=https://skasow.vercel.app
```

`VITE_API_URL` est lue au build Vite. Apres chaque modification, redeployer le
frontend.

## Uploads d'annonces

Vercel ne fournit pas de stockage fichier persistant pour les Serverless
Functions. Le backend utilise `/tmp/uploads` sur Vercel uniquement pour eviter un
crash de demarrage, mais les fichiers peuvent disparaitre entre deux invocations.

Pour les images d'annonces en production, utiliser un stockage externe comme
Vercel Blob, S3 ou Cloudinary, puis stocker l'URL publique en base.
