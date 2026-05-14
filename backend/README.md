# DS Conseil Immo Backend

Backend NestJS de l'application immobiliere intelligente DS Conseil.

## Stack

- NestJS + TypeScript
- PostgreSQL
- Prisma
- JWT access tokens + refresh tokens hashes en base
- bcryptjs
- Swagger
- Docker / docker-compose
- Validation DTO globale, Helmet, CORS configurable, rate limiting

## Prerequis

- Node.js 20+
- Docker Desktop
- npm

## Configuration

```bash
cp .env.example .env
```

Variables principales :

- `DATABASE_URL` : connexion PostgreSQL Prisma
- `JWT_ACCESS_SECRET` : secret access token
- `JWT_ACCESS_EXPIRES_IN` : duree access token, par defaut `15m`
- `JWT_REFRESH_EXPIRES_IN_DAYS` : duree refresh token, par defaut `30`
- `CORS_ORIGIN` : origines frontend autorisees, separees par virgule

## Installation locale

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run start:dev
```

API : `http://localhost:3000`

Swagger : `http://localhost:3000/docs`

Healthcheck : `GET /health`

## Docker

```bash
docker compose up --build
```

Le service `api` applique les migrations au demarrage puis lance NestJS.

## Authentification

Routes :

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`

L'inscription publique cree toujours un compte `USER`. Les comptes `ADMIN` doivent etre promus en base ou via une procedure interne, afin d'eviter l'escalade de privilege depuis l'API publique.

## Utilisateurs

Routes protegees par JWT :

- `GET /users/me`
- `PATCH /users/me`
- `DELETE /users/me`

La suppression anonymise les donnees personnelles du compte et revoque les refresh tokens actifs.

## Analyses

Routes protegees par JWT :

- `POST /analyses`
- `GET /analyses/my`
- `GET /analyses/:id`

Un utilisateur ne voit que ses analyses. Un administrateur peut consulter toutes les analyses.

Payload de creation :

```json
{
  "projectType": "BUY",
  "city": "Bamako",
  "district": "ACI 2000",
  "budget": 35000000,
  "propertyType": "Villa",
  "surface": 120,
  "urgency": "HIGH",
  "objective": "Residence principale",
  "message": "Recherche rapide",
  "consentAccepted": true
}
```

Enums :

- `projectType` : `BUY`, `RENT`, `SELL`, `INVEST`
- `urgency` : `LOW`, `MEDIUM`, `HIGH`
- `maturityLevel` : `LOW`, `MEDIUM`, `HIGH`
- `commercialPriority` : `LOW`, `MEDIUM`, `HIGH`
- `status` : `SENT`, `IN_PROGRESS`, `PRIORITY`, `INCOMPLETE`, `PROCESSED`, `TO_RECONTACT`

## Scoring

Regles implementees :

- Budget renseigne : +20
- Telephone renseigne sur le profil utilisateur : +15
- Email renseigne : +10
- Urgence `HIGH` : +20
- Projet `BUY` ou `INVEST` : +15
- Ville ou quartier renseigne : +10
- Surface ou type de bien renseigne : +10

Seuils :

- `score >= 75` : maturite `HIGH`, priorite `HIGH`
- `45 <= score <= 74` : maturite `MEDIUM`, priorite `MEDIUM`
- `score < 45` : maturite `LOW`, priorite `LOW`

## Admin

Routes protegees par JWT + role `ADMIN` :

- `GET /admin/dashboard/stats`
- `GET /admin/analyses`
- `GET /admin/analyses/:id`
- `PATCH /admin/analyses/:id/status`
- `GET /admin/analyses/top`
- `GET /admin/analyses/by-service`

Filtres disponibles sur `GET /admin/analyses` :

- `projectType`
- `maturityLevel`
- `commercialPriority`
- `status`
- `minScore`
- `search`
- `sortBy`
- `sortOrder`
- `page`
- `limit`

`GET /admin/analyses/top` retourne les prospects a fort potentiel : score au moins 75, priorite `HIGH`, urgence `HIGH`, email et telephone presents.

## Chatbot

Routes publiques :

- `POST /chatbot/message`
- `GET /chatbot/suggestions`

Les reponses sont mockees et aucune conversation n'est stockee. Le module est isole pour brancher un fournisseur IA plus tard.

## Securite et RGPD

- Helmet active
- CORS limite via `CORS_ORIGIN`
- Rate limiting global
- Validation DTO globale avec whitelist
- Refresh tokens hashes et revocables
- Pas de logs contenant mots de passe, tokens ou messages complets
- Consentement obligatoire sur la creation d'analyse
- Suppression compte avec anonymisation
- Controle d'acces objet sur les analyses
