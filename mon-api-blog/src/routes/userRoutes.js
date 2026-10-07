// ==============================================================================
// src/routes/userRoutes.js
// Aiguillage des routes utilisateurs (SoC - Couche Routeur)
// ==============================================================================

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Le préfixe '/api/users' est défini dans server.js.

// GET /api/users (liste de tous les utilisateurs)
router.get('/', userController.getAllUsers);

// GET /api/users/:id (détail d'un utilisateur)
router.get('/:id', userController.getUserById);

// POST /api/users (création d'un utilisateur)
router.post('/', userController.createUser);

// Exportation du routeur
module.exports = router;
