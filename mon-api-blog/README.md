# MERN Décalé – Code Source Complet Séance 1 (Base de Départ Séance 2)

> **Destiné aux étudiants absents lors de la Séance 1 ou souhaitant repartir d'une base propre et validée pour démarrer la Séance 2 (MongoDB Atlas & Mongoose).**  
> **Dr. Abdelweheb GUEDDES – École Polytechnique de Sousse (2026–2027)**

---

## 📌 1. Présentation du Projet

Ce projet implémente l'architecture modulaire professionnelle **SoC (Separation of Concerns)** construite lors de la Séance 1 :
- Un point d'entrée unique et propre (`src/server.js`) qui configure Express et monte les routeurs.
- Une couche d'aiguillage d'URL avec `express.Router()` (`src/routes/articleRoutes.js` et `src/routes/userRoutes.js`).
- Une couche métier avec des fonctions contrôleurs modulaires (`src/controllers/articleController.js` et `src/controllers/userController.js`).
- Un CRUD complet en mémoire vive pour les **Articles** et les **Utilisateurs**.

---

## 🚀 2. Démarrage Rapide (En 2 Minutes)

### Étape 1 : Installer les dépendances
Ouvrez votre terminal dans le dossier du projet :
```bash
npm install
```

### Étape 2 : Lancer le serveur en mode développement
```bash
npm run dev
```
> Le serveur écoute immédiatement sur **`http://localhost:3000`** avec rechargement automatique à chaque modification (`node --watch`).

---

## 📡 3. Endpoints Disponibles dans l'API

### 📰 Domaine Articles (`/api/articles`)
| Méthode | URL | Description | Statut HTTP |
| :---: | :--- | :--- | :---: |
| **GET** | `/api/articles` | Liste de tous les articles | `200 OK` |
| **GET** | `/api/articles?author=Aya` | Filtrer les articles par auteur | `200 OK` |
| **GET** | `/api/articles/:id` | Détail d'un article spécifique | `200 OK` ou `404 Not Found` |
| **POST** | `/api/articles` | Création d'un article (`{ "title": "...", "author": "..." }`) | `201 Created` ou `400 Bad Request` |

### 👤 Domaine Utilisateurs (`/api/users`)
| Méthode | URL | Description | Statut HTTP |
| :---: | :--- | :--- | :---: |
| **GET** | `/api/users` | Liste de tous les utilisateurs | `200 OK` |
| **GET** | `/api/users/:id` | Détail d'un utilisateur spécifique | `200 OK` ou `404 Not Found` |
| **POST** | `/api/users` | Création d'un utilisateur (`{ "name": "...", "email": "..." }`) | `201 Created` ou `400 Bad Request` |

---

## 🧪 4. Tests avec Postman

1. Ouvrez **Postman**.
2. Cliquez sur **Import** en haut à gauche.
3. Glissez-déposez le fichier [`postman/collection_seance1.json`](./postman/collection_seance1.json).
4. Lancez les requêtes préconfigurées pour valider le fonctionnement de votre API.

---

## 🎯 5. Comment démarrer la Séance 2 à partir de ce projet ?

Pour la **Séance 2 (Persistance NoSQL avec MongoDB Atlas & Mongoose)** :
1. Vous conservez **exactement** cette arborescence.
2. Vous installez Mongoose et Dotenv : `npm install mongoose dotenv`.
3. Vous créez votre cluster gratuit sur [MongoDB Atlas](https://cloud.mongodb.com) et ajoutez votre URI dans un fichier `.env`.
4. Vous créez la connexion dans `src/config/db.js` et les modèles dans `src/models/`.
5. Vous remplacez simplement les tableaux mémoire de vos contrôleurs (`src/controllers/`) par les méthodes asynchrones Mongoose (`Article.find()`, `Article.create()`, etc.) avec `async / await` !

Bon travail ! 🚀
