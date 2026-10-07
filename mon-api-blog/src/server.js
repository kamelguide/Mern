// ==============================================================================
// src/server.js
// Point d'entrée de l'application - Architecture modulaire SoC
// Ne contient aucune route métier directe (uniquement configuration et écoute)
// ==============================================================================

require('dotenv').config();

const express = require('express');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

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

// Connexion à MongoDB avant de démarrer le serveur HTTP
async function startServer() {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Serveur modulaire en écoute sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur de démarrage :', error.message);
    process.exit(1);
  }
}

startServer()