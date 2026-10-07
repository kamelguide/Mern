// ==============================================================================
// src/controllers/userController.js
// Logique métier pour la gestion des utilisateurs (SoC - Couche Contrôleur)
// ==============================================================================

// Données utilisateurs isolées dans le contrôleur (en mémoire vive)
let users = [
  { id: 1, name: 'Sami', email: 'sami@poly.tn' },
  { id: 2, name: 'Aya', email: 'aya@poly.tn' }
];
let prochainId = 3;

// 1. Récupérer tous les utilisateurs (GET /api/users)
const getAllUsers = (req, res) => {
  res.status(200).json({ total: users.length, users });
};

// 2. Récupérer un utilisateur par son identifiant unique (:id)
const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: `Utilisateur ${id} introuvable` });
  }

  res.status(200).json(user);
};

// 3. Créer un nouvel utilisateur (POST /api/users)
const createUser = (req, res) => {
  const { name, email } = req.body;

  // Validation des champs obligatoires
  if (!name || !email) {
    return res.status(400).json({ error: "Le nom et l'email sont obligatoires" });
  }

  const nouvelUtilisateur = {
    id: prochainId++,
    name,
    email
  };

  users.push(nouvelUtilisateur);
  res.status(201).json({ message: 'Utilisateur créé avec succès', user: nouvelUtilisateur });
};

// Exportation CommonJS
module.exports = {
  getAllUsers,
  getUserById,
  createUser
};
