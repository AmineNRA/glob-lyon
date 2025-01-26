# Globlyon

## Prérequis

- **Node.js** : Assurez-vous d'avoir Node.js installé (version recommandée : 20 ou au dessus).
- **PostgreSQL** : Disposez d'un serveur PostgreSQL opérationnel.

---

## Étapes d'installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/globlyon.git
cd globlyon
```

### 2. Installation des dépendances

```bash
npm install
```

### 3. Configuration de l'environnement

1. Utilisez le fichier `.env.example` disponible dans le projet comme modèle pour configurer votre propre fichier `.env`.

   Exemple :
   ```plaintext
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASS=motdepasse
   DB_NAME=globlyon
   DB_PORT=5432
   ```

2. Copiez-le en `.env` et ajustez les valeurs en fonction de votre environnement :

   ```bash
   cp .env.example .env
   ```

### 4. Création de la base de données

1. Connectez-vous à PostgreSQL depuis votre terminal :
   ```bash
   psql -U postgres
   ```

2. Exécutez les commandes suivantes pour créer la base de données :
   ```sql
   CREATE DATABASE globlyon;
   \c globlyon;
   ```

### 5. Initialisation des tables

Exécutez le script `initDb.js` pour initialiser les tables nécessaires dans la base de données :

```bash
node initDb.js
```

> **Note** : Ce script utilise Sequelize pour synchroniser les modèles définis avec la base de données.

### 6. Démarrer le serveur

- **Mode développement** :
  ```bash
  npm run dev
  ```
- **Mode production** :
  ```bash
  node server.js
