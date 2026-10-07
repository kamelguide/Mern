// ==============================================================================
// src/controllers/articleController.js
// Logique métier et manipulation des articles (SoC - Couche Contrôleur)
// ==============================================================================

// Données isolées dans le contrôleur (en mémoire vive pour la Séance 1)
let articles = [
  { id: 1, title: 'Bienvenue sur le blog', author: 'Admin' },
  { id: 2, title: 'Mon premier serveur Express', author: 'Aya' },
  { id: 3, title: 'Tester une API avec Postman', author: 'Aya' }
];
let prochainId = 4;

// 1. Récupérer tous les articles (avec filtre optionnel ?author=...)
const getAllArticles = (req, res) => {
  const { author } = req.query; // déstructuration
  let resultat = articles;

  if (author) {
    resultat = articles.filter(a => a.author === author);
  }

  res.status(200).json({ total: resultat.length, articles: resultat });
};

// 2. Récupérer un article par son identifiant unique (:id)
const getArticleById = (req, res) => {
  const id = Number(req.params.id); // conversion indispensable ("2" -> 2)
  const article = articles.find(a => a.id === id);

  if (!article) {
    return res.status(404).json({ error: `Article ${id} introuvable` });
  }

  res.status(200).json(article);
};

// 3. Créer un nouvel article (POST /api/articles)
const createArticle = (req, res) => {
  const { title, author } = req.body;

  // Validation des champs obligatoires
  if (!title || !author) {
    return res.status(400).json({ error: "Le titre et l'auteur sont obligatoires" });
  }

  const nouvelArticle = {
    id: prochainId++,
    title,
    author
  };

  articles.push(nouvelArticle);
  res.status(201).json({ message: 'Article créé avec succès', article: nouvelArticle });
};

// Exportation CommonJS sous forme d'objet
module.exports = {
  getAllArticles,
  getArticleById,
  createArticle
};
