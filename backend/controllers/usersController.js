// controllers/userController.js

const userModel = require('../models/usersModel');

const createUser = async (req, res, next) => {
  const { username, email, hashed_password } = req.body;
  console.log(req.body)
  try {
    if (!username || !email || !hashed_password) {
      return res.status(400).json({ error: 'username, email, and hashed_password are required' });
    }

    const newUser = await userModel.createUser({ username, email, hashed_password });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const newData = req.body;

    const updated = await userModel.updateUser(userId, newData);

    if (!updated) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deleted = await userModel.deleteUser(userId);

    if (!deleted) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};