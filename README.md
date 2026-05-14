# DS Conseil Immo

Application web immobiliere pour DS Conseil : vitrine de services, pre-analyse de projet, espace utilisateur, tableau de bord administrateur et backend NestJS avec authentification JWT.

## Lancer le projet

### Prerequis

- Node.js 20+
- npm
- Docker Desktop, pour PostgreSQL ou pour lancer tout le backend en conteneur

Le projet est organise en deux parties :

- Frontend React/Vite : racine `ds-conseil-immo`
- Backend NestJS/Prisma : dossier `ds-conseil-immo/backend`

### 1. Installer les dependances

Depuis la racine du projet :

```bash
npm install
```

Puis pour le backend :

```bash
cd backend
npm install
```

### 2. Configurer le backend

Dans `backend`, creer le fichier `.env` depuis l'exemple :

```bash
cp .env.example .env
```

Valeurs de developpement attendues :

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/ds_conseil_immo?schema=public
JWT_ACCESS_SECRET=change_me_access_secret_at_least_32_chars
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN_DAYS=30
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_TTL=60
RATE_LIMIT_LIMIT=100
```

### 3. Demarrer PostgreSQL

Option recommandee en local : lancer uniquement la base avec Docker Compose depuis `backend`.

```bash
cd backend
docker compose up -d postgres
```

La base PostgreSQL sera disponible sur le port local `5433`.

### 4. Initialiser Prisma

Toujours dans `backend` :

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 5. Demarrer le backend

Dans `backend` :

```bash
npm run start:dev
```

Le backend ecoute sur :

- API : `http://localhost:3000`
- Swagger : `http://localhost:3000/docs`
- Healthcheck : `http://localhost:3000/health`

### 6. Demarrer le frontend

Dans un autre terminal, depuis la racine `ds-conseil-immo` :

```bash
npm run dev
```

Le frontend ecoute sur :

```text
http://localhost:5173
```

Le fichier `vite.config.ts` proxy les routes API (`/auth`, `/analyses`, `/admin`, `/users`, `/chatbot`) vers `http://localhost:3000`. Il n'est donc pas obligatoire de definir `VITE_API_URL` en developpement.

### Variante : backend complet avec Docker

Depuis `backend` :

```bash
docker compose up --build
```

Cette commande lance PostgreSQL et l'API NestJS. Le conteneur API applique les migrations Prisma avant de demarrer Nest.

### Commandes utiles

Frontend :

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

Backend :

```bash
npm run start:dev
npm run build
npm run start
npm run lint
npm run prisma:generate
npm run prisma:migrate
npm run prisma:deploy
```

## Description du projet

DS Conseil Immo est une application immobiliere orientee conseil. Elle permet a un visiteur de decouvrir les services, d'utiliser un assistant, de remplir une pre-analyse immobiliere, puis de retrouver ses demandes dans un espace personnel. Un administrateur peut ensuite consulter et piloter les analyses recues.

## Fonctionnalites principales

- Page d'accueil et presentation de l'agence
- Catalogue de services immobiliers
- Detail d'un service via une route dynamique
- Formulaire de pre-analyse immobiliere
- Scoring automatique du projet
- Authentification inscription/connexion
- Espace utilisateur protege
- Tableau de bord administrateur protege par role `ADMIN`
- Chatbot public avec reponses mockees
- API documentee avec Swagger
- Persistance PostgreSQL via Prisma

## Parcours utilisateur

1. Le visiteur arrive sur la page d'accueil.
2. Il consulte les services ou lance une pre-analyse.
3. Le formulaire collecte les informations du projet : type, ville, quartier, budget, surface, urgence, objectif, message et consentement.
4. Si l'utilisateur n'est pas connecte, il est redirige vers l'inscription ou la connexion.
5. Une fois connecte, l'analyse est creee via l'API.
6. L'utilisateur retrouve ses analyses dans `Mon espace`.
7. Un administrateur consulte les analyses, les filtres, repere les prospects prioritaires et peut modifier leur statut.

## Routes frontend

- `/` : accueil
- `/services` : liste des services
- `/services/:slug` : detail d'un service
- `/pre-analysis` : pre-analyse immobiliere
- `/pre-analyse-ia` : alias de la pre-analyse
- `/chatbot` : assistant conversationnel
- `/faq` : questions frequentes
- `/contact` : contact
- `/auth` : connexion et inscription
- `/mon-espace` : espace utilisateur, protege
- `/admin/dashboard` : tableau de bord admin, protege et reserve aux administrateurs

## Architecture frontend

Le frontend est construit avec React, TypeScript, Vite, Tailwind CSS v4 et React Router.

Structure principale :

- `src/App.tsx` : definition des routes
- `src/pages` : pages applicatives
- `src/components` : composants reutilisables
- `src/contexts` : contexte d'authentification
- `src/services` : appels API et logique metier cote client
- `src/types` : types TypeScript partages cote frontend
- `src/utils` : helpers locaux
- `src/data` : donnees statiques de presentation
- `src/assets` : ressources visuelles

Services frontend importants :

- `authService.ts` : inscription, connexion, deconnexion
- `apiClient.ts` : client HTTP authentifie, injection du token JWT
- `prospectService.ts` : creation et lecture des analyses
- `analysisService.ts` : scoring local et recommandations
- `chatbotService.ts` : reponse mockee du chatbot

## Architecture backend

Le backend est construit avec NestJS, TypeScript, Prisma et PostgreSQL.

Modules principaux :

- `auth` : inscription, connexion, refresh token, logout, utilisateur courant
- `users` : profil utilisateur et suppression/anonymisation
- `analyses` : creation et consultation des analyses utilisateur
- `admin` : statistiques, filtres, detail et changement de statut
- `chatbot` : endpoint public pour messages et suggestions
- `health` : healthcheck
- `prisma` : service Prisma partage
- `common` : guards, decorators, types, pagination
- `config` : validation des variables d'environnement

## API backend

Base URL locale :

```text
http://localhost:3000
```

Documentation Swagger :

```text
http://localhost:3000/docs
```

### Authentification

- `POST /auth/register` : creer un compte utilisateur
- `POST /auth/login` : se connecter
- `POST /auth/refresh` : renouveler les tokens
- `POST /auth/logout` : revoquer un refresh token
- `GET /auth/me` : recuperer l'utilisateur courant

L'inscription publique cree toujours un compte `USER`. Les comptes `ADMIN` doivent etre promus directement en base ou via une procedure interne.

### Utilisateurs

Routes protegees par JWT :

- `GET /users/me`
- `PATCH /users/me`
- `DELETE /users/me`

La suppression anonymise les donnees personnelles et revoque les refresh tokens actifs.

### Analyses

Routes protegees par JWT :

- `POST /analyses`
- `GET /analyses/my`
- `GET /analyses/:id`

Payload type :

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

### Administration

Routes protegees par JWT et role `ADMIN` :

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

### Chatbot

Routes publiques :

- `POST /chatbot/message`
- `GET /chatbot/suggestions`

Les reponses sont actuellement mockees. Le module est isole pour permettre l'ajout futur d'un fournisseur IA.

## Base de donnees

La base utilise PostgreSQL et Prisma.

Modeles principaux :

- `User` : compte, role, informations de profil
- `RefreshToken` : refresh tokens hashes, expirables et revocables
- `Analysis` : analyse immobiliere et scoring commercial
- `AuditLog` : journalisation des actions sensibles

Enums principaux :

- `Role` : `USER`, `ADMIN`
- `ProjectType` : `BUY`, `RENT`, `SELL`, `INVEST`
- `Urgency` : `LOW`, `MEDIUM`, `HIGH`
- `MaturityLevel` : `LOW`, `MEDIUM`, `HIGH`
- `CommercialPriority` : `LOW`, `MEDIUM`, `HIGH`
- `AnalysisStatus` : `SENT`, `IN_PROGRESS`, `PRIORITY`, `INCOMPLETE`, `PROCESSED`, `TO_RECONTACT`

## Scoring des analyses

Le backend calcule un score commercial a partir des informations du projet.

Regles principales :

- Budget renseigne : `+20`
- Telephone renseigne sur le profil utilisateur : `+15`
- Email renseigne : `+10`
- Urgence `HIGH` : `+20`
- Projet `BUY` ou `INVEST` : `+15`
- Ville ou quartier renseigne : `+10`
- Surface ou type de bien renseigne : `+10`

Seuils :

- `score >= 75` : maturite `HIGH`, priorite `HIGH`
- `45 <= score <= 74` : maturite `MEDIUM`, priorite `MEDIUM`
- `score < 45` : maturite `LOW`, priorite `LOW`

## Securite

- Validation globale des DTO avec whitelist
- Rejet des proprietes non autorisees
- Helmet active
- CORS configurable via `CORS_ORIGIN`
- Rate limiting global
- Mots de passe hashes avec bcrypt
- Access tokens JWT
- Refresh tokens hashes en base
- Revocation des refresh tokens
- Guards JWT et roles admin
- Controle d'acces objet sur les analyses
- Consentement obligatoire avant creation d'une analyse
- Anonymisation lors de la suppression de compte

## Configuration frontend/backend

En developpement, le frontend peut appeler l'API de deux manieres :

1. Via le proxy Vite configure dans `vite.config.ts`
2. Via une variable `VITE_API_URL`

Exemple si vous ne voulez pas utiliser le proxy :

```env
VITE_API_URL=http://localhost:3000
```

Dans ce cas, creer un fichier `.env` a la racine du frontend et redemarrer Vite.

## Depannage

### Message `Requete impossible` a l'inscription

Verifier que :

- Le backend tourne sur `http://localhost:3000`
- Le frontend a bien ete redemarre apres modification de `vite.config.ts`
- Le proxy Vite contient bien `/auth`
- Le mot de passe contient au moins 8 caracteres
- L'email n'existe pas deja en base

### Erreur de connexion PostgreSQL

Verifier que le conteneur PostgreSQL est lance :

```bash
docker compose ps
```

Verifier aussi que `DATABASE_URL` pointe bien vers `localhost:5433` en local.

### Erreur CORS

Verifier la variable backend :

```env
CORS_ORIGIN=http://localhost:5173
```

Si le frontend tourne sur un autre port, ajouter cette origine dans `CORS_ORIGIN`.

### Swagger inaccessible

Verifier que l'API NestJS est lancee :

```bash
curl http://localhost:3000/health
```

## Build production

Frontend :

```bash
npm run build
```

Backend :

```bash
cd backend
npm run build
npm run start
```

En production, definir des secrets JWT robustes, une URL PostgreSQL de production, les bonnes origines CORS et servir le frontend compile depuis `dist`.
