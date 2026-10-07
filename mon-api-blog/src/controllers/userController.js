const User = require('../models/userModel');

const createUser = async (req, res) => {
  try {
    const { name, email, age, role } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Le nom et l'email sont requis" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: 'Cet email est deja utilise' });
    }

    const user = await User.create({ name, email, age, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouve' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createUser, getUsers, getUserById };
