// ==============================================================================
// src/routes/articleRoutes.js
// Aiguillage des routes articles (SoC - Couche Routeur)
// ==============================================================================

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Le préfixe '/api/articles' est défini dans server.js.
// Ici, '/' correspond donc directement à '/api/articles' !

// GET /api/articles (liste complète ou filtre ?author=...)
router.get('/', articleController.getAllArticles);

// GET /api/articles/:id (détail d'un article)
router.get('/:id', articleController.getArticleById);

// POST /api/articles (création d'un article)
router.post('/', articleController.createArticle);

// Exportation du routeur configuré
module.exports = router;
