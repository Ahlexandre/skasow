# DS Conseil Immo

Application web immobilière pour DS Conseil : vitrine de services, pré-analyse de projet, annonces immobilières, avis clients, espace utilisateur, tableau de bord administrateur et backend NestJS avec authentification JWT.

## Lancer le projet

### Prérequis

- Node.js 20+
- npm
- Docker Desktop, pour PostgreSQL ou pour lancer tout le backend en conteneur

Le projet est organisé en deux parties :

- Frontend React/Vite : racine `ds-conseil-immo`
- Backend NestJS/Prisma : dossier `ds-conseil-immo/backend`

### 1. Installer les dépendances

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

Dans `backend`, créer le fichier `.env` depuis l'exemple :

```bash
cp .env.example .env
```

Valeurs de développement attendues :

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

### 3. Démarrer PostgreSQL

Option recommandée en local : lancer uniquement la base avec Docker Compose depuis `backend`.

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

### 5. Démarrer le backend

Dans `backend` :

```bash
npm run start:dev
```

Le backend écoute sur :

- API : `http://localhost:3000`
- Swagger : `http://localhost:3000/docs`
- Healthcheck : `http://localhost:3000/health`

### 6. Démarrer le frontend

Dans un autre terminal, depuis la racine `ds-conseil-immo` :

```bash
npm run dev
```

Le frontend écoute sur :

```text
http://localhost:5173
```

Le fichier `vite.config.ts` proxifie les routes API (`/auth`, `/analyses`, `/admin`, `/users`, `/chatbot`, `/reviews`, `/listings`, `/uploads`) vers `http://localhost:3000`. Il n'est donc pas obligatoire de définir `VITE_API_URL` en développement.

### Variante : backend complet avec Docker

Depuis `backend` :

```bash
docker compose up --build
```

Cette commande lance PostgreSQL et l'API NestJS. Le conteneur API applique les migrations Prisma avant de démarrer Nest.

Les images d'annonces sont conservées dans le volume Docker `api_uploads`, monté sur `/app/uploads`, afin d'éviter de perdre les fichiers lors d'un redémarrage du conteneur API.

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

DS Conseil Immo est une application immobilière orientée conseil. Elle permet à un visiteur de découvrir les services, d'utiliser un assistant, de remplir une pré-analyse immobilière, de consulter des annonces et de laisser un avis. Un utilisateur connecté retrouve ses demandes, ses candidatures et ses données dans son espace personnel. Un administrateur peut consulter les analyses reçues, gérer les annonces, suivre les personnes intéressées et piloter l'historique des suppressions.

## Fonctionnalités principales

- Page d'accueil et présentation de l'agence
- Catalogue de services immobiliers
- Détail d'un service via une route dynamique
- Formulaire de pré-analyse immobilière
- Parcours de pré-analyse adapté à l'authentification : un utilisateur connecté n'a pas à ressaisir ses coordonnées, un visiteur renseigne nom, prénom, email et téléphone avant l'inscription
- Scoring automatique du projet
- Authentification inscription/connexion
- Préremplissage du formulaire d'inscription depuis les coordonnées collectées en pré-analyse invité
- Espace utilisateur protégé
- Modification des données utilisateur : nom, prénom, email et mot de passe
- Gestion des données personnelles et demandes de suppression de compte
- Historisation structurée des comptes supprimés et de leurs pré-analyses pendant 3 ans
- Avis utilisateurs : création, modification, suppression et affichage public des avis 4 ou 5 étoiles
- Annonces immobilières : liste publique, page détail, galerie d'images cliquables, création, modification, suppression et publication par les administrateurs
- Candidatures sur annonces avec budget, téléphone obligatoire, métier, situation familiale et message optionnel
- Upload d'images pour les annonces immobilières, avec persistance des fichiers via volume Docker
- Actions WhatsApp depuis les pages pertinentes : contact, partage d'annonce et contact rapide depuis une annonce
- Tableau de bord administrateur protégé par rôle `ADMIN`
- Gestion admin des utilisateurs, statuts, suppressions et historique
- Chatbot public avec réponses symboliques, suggestions et reconnaissance vocale côté navigateur
- Interface chatbot responsive, agrandissable et bouton flottant accessible sur l'interface utilisateur
- Interfaces responsive pour mobile, avec navigation mobile adaptée aux usages téléphone
- Saisie téléphone filtrée côté interface : seuls les chiffres locaux sont acceptés, l'indicatif Mali `+223` est ajouté par l'interface
- Politique de confidentialité alignée sur les traitements réels de l'application
- API documentée avec Swagger
- Persistance PostgreSQL via Prisma

## Parcours utilisateur

1. Le visiteur arrive sur la page d'accueil.
2. Il consulte les services, les annonces, les avis ou lance une pré-analyse.
3. Le formulaire collecte les informations du projet : type, ville, quartier, budget, surface, urgence, objectif, profil facultatif et consentement.
4. Si l'utilisateur est connecté, ses coordonnées de compte sont utilisées automatiquement.
5. Si l'utilisateur n'est pas connecté, il renseigne prénom, nom, email et téléphone ; ces données préremplissent ensuite le formulaire d'inscription.
6. Une fois connecté, l'analyse est créée via l'API.
7. L'utilisateur retrouve ses analyses dans `Mon espace`.
8. Il peut modifier ou supprimer une pré-analyse, publier un avis, candidater à une annonce ou demander la suppression de son compte depuis `Mes données`.
9. Un administrateur consulte les analyses, les filtre, repère les prospects prioritaires, modifie les statuts, gère les utilisateurs et suit les candidatures aux annonces.

## Routes frontend

- `/` : accueil
- `/services` : liste des services
- `/services/:slug` : détail d'un service
- `/pre-analysis` : pré-analyse immobilière
- `/pre-analyse-ia` : alias de la pré-analyse
- `/chatbot` : assistant conversationnel
- `/faq` : questions fréquentes
- `/contact` : contact
- `/privacy` : politique de confidentialité
- `/avis` : avis clients
- `/annonces` : annonces immobilières publiées
- `/annonces/:id` : détail public d'une annonce, galerie d'images et candidature
- `/auth` : connexion et inscription
- `/mon-espace` : espace utilisateur, protégé
- `/mes-donnees` : gestion des données utilisateur, protégé
- `/admin/dashboard` : tableau de bord admin, protégé et réservé aux administrateurs
- `/admin/users` : gestion des utilisateurs admin, protégé et réservé aux administrateurs
- `/admin/historique` : historique admin des suppressions et activités, protégé et réservé aux administrateurs
- `/admin/annonces` : gestion admin des annonces, images et candidatures

## Architecture frontend

Le frontend est construit avec React, TypeScript, Vite, Tailwind CSS v4 et React Router.

Structure principale :

- `src/App.tsx` : définition des routes
- `src/pages` : pages applicatives
- `src/components` : composants réutilisables
- `src/contexts` : contexte d'authentification
- `src/services` : appels API et logique métier côté client
- `src/types` : types TypeScript partagés côté frontend
- `src/utils` : helpers locaux
- `src/data` : données statiques de présentation
- `src/assets` : ressources visuelles

Services frontend importants :

- `authService.ts` : inscription, connexion, déconnexion
- `apiClient.ts` : client HTTP authentifié, injection du token JWT
- `prospectService.ts` : création, lecture, modification, suppression et statuts des analyses
- `analysisService.ts` : scoring local et recommandations
- `chatbotService.ts` : appels au chatbot et suggestions
- `reviewService.ts` : avis utilisateur et avis publics
- `listingService.ts` : annonces, candidatures et upload d'images
- `utils/phone.ts` : normalisation et filtrage numérique des téléphones maliens
- `utils/whatsapp.ts` : génération des liens WhatsApp de contact et de partage d'annonce

## Architecture backend

Le backend est construit avec NestJS, TypeScript, Prisma et PostgreSQL.

Modules principaux :

- `auth` : inscription, connexion, refresh token, logout, utilisateur courant
- `users` : profil utilisateur, demande de suppression et anonymisation
- `analyses` : création, consultation, modification et suppression des analyses utilisateur
- `admin` : statistiques, filtres, détail, statuts, utilisateurs, historique et suppressions
- `chatbot` : endpoint public pour messages et suggestions
- `reviews` : avis utilisateur et avis publics
- `listings` : annonces, candidatures et upload d'images
- `health` : healthcheck
- `prisma` : service Prisma partagé
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

- `POST /auth/register` : créer un compte utilisateur
- `POST /auth/login` : se connecter
- `POST /auth/refresh` : renouveler les tokens
- `POST /auth/logout` : révoquer un refresh token
- `GET /auth/me` : récupérer l'utilisateur courant

L'inscription publique crée toujours un compte `USER`. Les comptes `ADMIN` doivent être promus directement en base ou via une procédure interne.

### Utilisateurs

Routes protégées par JWT :

- `GET /users/me`
- `PATCH /users/me`
- `POST /users/me/deletion-request`
- `DELETE /users/me`

La demande de suppression est historisée pour traitement admin. La suppression directe conserve un snapshot structuré de l'utilisateur (`identity`, `contact`, `account`, `deletion`, `analyses`) et de ses pré-analyses, anonymise ensuite les données personnelles et révoque les refresh tokens actifs.

### Analyses

Routes protégées par JWT :

- `POST /analyses`
- `GET /analyses/my`
- `GET /analyses/:id`
- `PATCH /analyses/:id`
- `DELETE /analyses/:id`

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

### Avis

Routes publiques et protégées selon l'action :

- `GET /reviews/public` : récupérer les avis publics affichables
- `GET /reviews/me` : récupérer son avis, protégé par JWT
- `POST /reviews/me` : créer son avis, protégé par JWT
- `PATCH /reviews/me` : modifier son avis, protégé par JWT
- `DELETE /reviews/me` : supprimer son avis, protégé par JWT

Seuls les avis notés 4 ou 5 étoiles sont affichés publiquement sur la page d'accueil et la page Avis.

### Annonces

Routes publiques et protégées selon l'action :

- `GET /listings` : récupérer les annonces publiées
- `GET /listings/:id` : récupérer le détail d'une annonce publiée
- `GET /listings/me/applications` : récupérer ses candidatures, protégé par JWT
- `POST /listings/:id/applications` : candidater à une annonce, protégé par JWT
- `PATCH /listings/me/applications/:id` : modifier sa candidature, protégé par JWT

Routes réservées aux administrateurs :

- `GET /listings/admin/all`
- `GET /listings/admin/:id`
- `POST /listings/admin`
- `PATCH /listings/admin/:id`
- `DELETE /listings/admin/:id`
- `POST /listings/admin/uploads`
- `PATCH /listings/admin/applications/:id/status`

Les administrateurs peuvent créer, modifier, publier, archiver ou supprimer une annonce. Ils peuvent aussi ajouter des images et consulter la liste des utilisateurs intéressés. Côté public, chaque annonce dispose d'une page détail avec galerie d'images cliquables, bouton de partage WhatsApp, contact rapide et formulaire de candidature protégé par connexion. La candidature exige un téléphone afin que DS Conseil puisse rappeler l'utilisateur.

### Administration

Routes protégées par JWT et rôle `ADMIN` :

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

### Chatbot

Routes publiques :

- `POST /chatbot/message`
- `GET /chatbot/suggestions`

Le chatbot utilise une logique symbolique côté backend : intentions, mots-clés, contexte court et suggestions. La reconnaissance vocale est gérée côté navigateur lorsque celui-ci la prend en charge.

## Base de données

La base utilise PostgreSQL et Prisma.

Modèles principaux :

- `User` : compte, rôle, informations de profil
- `RefreshToken` : refresh tokens hashés, expirables et révocables
- `Analysis` : analyse immobilière et scoring commercial
- `AnalysisHistory` : historique des analyses supprimées
- `AccountDeletionRequest` : demandes de suppression de compte
- `Review` : avis utilisateur, note et commentaire
- `Listing` : annonce immobilière, informations du bien, statut et images
- `ListingApplication` : candidature ou intérêt utilisateur sur une annonce
- `AuditLog` : journalisation des actions sensibles

Enums principaux :

- `Role` : `USER`, `ADMIN`
- `ProjectType` : `BUY`, `RENT`, `SELL`, `INVEST`
- `Urgency` : `LOW`, `MEDIUM`, `HIGH`
- `MaturityLevel` : `LOW`, `MEDIUM`, `HIGH`
- `CommercialPriority` : `LOW`, `MEDIUM`, `HIGH`
- `AnalysisStatus` : `SENT`, `FAVORITE`, `IN_PROGRESS`, `PRIORITY`, `INCOMPLETE`, `PROCESSED`, `TO_RECONTACT`, `ARCHIVED`
- `MaritalStatus` : `SINGLE`, `MARRIED`, `PARTNERED`, `DIVORCED`, `WIDOWED`, `PREFER_NOT_TO_SAY`
- `AccountDeletionRequestStatus` : `PENDING`, `PROCESSED`, `CANCELLED`
- `ListingStatus` : `DRAFT`, `PUBLISHED`, `ARCHIVED`
- `ListingApplicationStatus` : `INTERESTED`, `CONTACTED`, `VISIT_SCHEDULED`, `RESERVED`, `REJECTED`, `CANCELLED`

## Scoring des analyses

Le backend calcule un score commercial à partir des informations du projet.

Règles principales :

- Budget renseigné : `+20`
- Téléphone renseigné sur le profil utilisateur : `+15`
- Email renseigné : `+10`
- Urgence `HIGH` : `+20`
- Projet `BUY` ou `INVEST` : `+15`
- Ville ou quartier renseigné : `+10`
- Surface ou type de bien renseigné : `+10`

Seuils :

- `score >= 75` : maturité `HIGH`, priorité `HIGH`
- `45 <= score <= 74` : maturité `MEDIUM`, priorité `MEDIUM`
- `score < 45` : maturité `LOW`, priorité `LOW`

## Données personnelles

La politique de confidentialité est disponible sur `/privacy`. Elle couvre les traitements réellement présents dans l'application :

- compte utilisateur, session et modification du profil ;
- pré-analyses, scoring et recommandations ;
- avis utilisateurs, avec affichage public limité aux avis 4 ou 5 étoiles ;
- annonces immobilières, candidatures et liste des personnes intéressées ;
- images d'annonces ajoutées par les administrateurs ;
- chatbot et reconnaissance vocale côté navigateur ;
- historique structuré des comptes supprimés et des pré-analyses conservé 3 ans.

L'interface admin affiche le temps restant avant suppression définitive des données historisées et permet leur suppression manuelle.

## Sécurité

- Validation globale des DTO avec whitelist
- Rejet des propriétés non autorisées
- Helmet activé
- CORS configurable via `CORS_ORIGIN`
- Rate limiting global
- Mots de passe hashés avec bcrypt
- Access tokens JWT
- Refresh tokens hashés en base
- Revocation des refresh tokens
- Guards JWT et rôles admin
- Contrôle d'accès objet sur les analyses
- Contrôle d'accès objet sur les candidatures utilisateur
- Upload d'images limité aux administrateurs
- Validation des formats d'images acceptés pour les annonces
- Consentement obligatoire avant création d'une analyse
- Historisation des suppressions d'analyses et des pré-analyses liées aux comptes supprimés
- Demande de suppression de compte avec traitement admin
- Anonymisation lors de la suppression de compte

## Configuration frontend/backend

En développement, le frontend peut appeler l'API de deux manières :

1. Via le proxy Vite configuré dans `vite.config.ts`
2. Via une variable `VITE_API_URL`

Exemple si vous ne voulez pas utiliser le proxy :

```env
VITE_API_URL=http://localhost:3000
```

Dans ce cas, créer un fichier `.env` à la racine du frontend et redémarrer Vite.

## Dépannage

### Message `Requête impossible` à l'inscription

Vérifier que :

- Le backend tourne sur `http://localhost:3000`
- Le frontend a bien été redémarré après modification de `vite.config.ts`
- Le proxy Vite contient bien `/auth`
- Le mot de passe contient au moins 8 caractères
- L'email n'existe pas déjà en base

### Erreur de connexion PostgreSQL

Vérifier que le conteneur PostgreSQL est lancé :

```bash
docker compose ps
```

Vérifier aussi que `DATABASE_URL` pointe bien vers `localhost:5433` en local.

### Erreur CORS

Vérifier la variable backend :

```env
CORS_ORIGIN=http://localhost:5173
```

Si le frontend tourne sur un autre port, ajouter cette origine dans `CORS_ORIGIN`.

### Swagger inaccessible

Vérifier que l'API NestJS est lancée :

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

En production, définir des secrets JWT robustes, une URL PostgreSQL de production, les bonnes origines CORS et servir le frontend compilé depuis `dist`.
