// ==============================================================================
// src/server.js
// Point d'entrée de l'application - Architecture modulaire SoC
// Ne contient aucune route métier directe (uniquement configuration et écoute)
// ==============================================================================

const express = require('express');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares obligatoires
app.use(express.json()); // parse le corps JSON et remplit req.body

// Montage des routeurs modulaires sous leurs préfixes d'URL respectifs
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);

// Route racine pour vérifier que le serveur tourne
app.get('/', (req, res) => {
  res.json({
    message: "API du Blog - Serveur Modulaire Opérationnel (Architecture SoC)",
    ressources: [
      "http://localhost:3000/api/articles",
      "http://localhost:3000/api/users"
    ]
  });
});

// Démarrage du serveur HTTP
app.listen(PORT, () => {
  console.log(`Serveur modulaire en écoute sur http://localhost:${PORT}`);
});
