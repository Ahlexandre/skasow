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

Le service `api` applique les migrations au demarrage puis lance NestJS. Les uploads d'annonces sont conserves dans le volume Docker `api_uploads`, monte sur `/app/uploads`.

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
- `POST /users/me/deletion-request`
- `DELETE /users/me`

La demande de suppression cree une entree traitable par un administrateur. La suppression directe conserve un snapshot structure de l'utilisateur (`identity`, `contact`, `account`, `deletion`, `analyses`) et de ses pre-analyses, anonymise ensuite les donnees personnelles du compte et revoque les refresh tokens actifs.

## Analyses

Routes protegees par JWT :

- `POST /analyses`
- `GET /analyses/my`
- `GET /analyses/:id`
- `PATCH /analyses/:id`
- `DELETE /analyses/:id`

Un utilisateur ne voit que ses analyses. Un administrateur peut consulter toutes les analyses. Une suppression d'analyse cree un historique avant suppression definitive.

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
- `status` : `SENT`, `FAVORITE`, `IN_PROGRESS`, `PRIORITY`, `INCOMPLETE`, `PROCESSED`, `TO_RECONTACT`, `ARCHIVED`
- `maritalStatus` : `SINGLE`, `MARRIED`, `PARTNERED`, `DIVORCED`, `WIDOWED`, `PREFER_NOT_TO_SAY`

## Avis

Routes publiques et protegees selon l'action :

- `GET /reviews/public`
- `GET /reviews/me`
- `POST /reviews/me`
- `PATCH /reviews/me`
- `DELETE /reviews/me`

Les routes `me` sont protegees par JWT. Seuls les avis notes 4 ou 5 etoiles sont affiches publiquement.

## Annonces

Routes publiques et protegees selon l'action :

- `GET /listings`
- `GET /listings/:id`
- `GET /listings/me/applications`
- `POST /listings/:id/applications`
- `PATCH /listings/me/applications/:id`

Routes reservees aux administrateurs :

- `GET /listings/admin/all`
- `GET /listings/admin/:id`
- `POST /listings/admin`
- `PATCH /listings/admin/:id`
- `DELETE /listings/admin/:id`
- `POST /listings/admin/uploads`
- `PATCH /listings/admin/applications/:id/status`

Les candidatures sur annonces exigent un telephone, un budget et les informations utiles au rappel commercial. Les administrateurs peuvent creer, publier, archiver ou supprimer des annonces, ajouter des images et suivre les candidatures.

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
- `GET /admin/activity`
- `GET /admin/history`
- `GET /admin/analyses`
- `GET /admin/analyses/top`
- `GET /admin/analyses/by-service`
- `GET /admin/analyses/:id`
- `PATCH /admin/analyses/:id/status`
- `DELETE /admin/analyses/:id`
- `GET /admin/users`
- `GET /admin/users/:id`
- `PATCH /admin/users/:id/role`
- `DELETE /admin/users/:id`

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

`DELETE /admin/analyses/:id` est limite aux analyses avec le statut `ARCHIVED` et conserve un snapshot dans l'historique avant suppression.

Les routes utilisateurs admin permettent de filtrer les comptes, consulter le detail d'un utilisateur, modifier son role et anonymiser un compte. Un administrateur ne peut pas supprimer son propre compte ni retirer son propre role admin. Lors d'une suppression utilisateur, les pre-analyses actives sont copiees dans `AnalysisHistory` avant anonymisation.

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
- Candidature annonce protegee par JWT et controle d'acces objet sur les candidatures utilisateur
- Upload d'images d'annonces limite aux administrateurs
- Historique interne des analyses supprimees et des pre-analyses liees aux comptes supprimes
- Demandes de suppression de compte avec statut `PENDING`, `PROCESSED` ou `CANCELLED`
- Suppression compte avec anonymisation
- Controle d'acces objet sur les analyses
