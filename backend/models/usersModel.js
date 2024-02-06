// models/userModel.js

const db = require('../db/index');

const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};


const createUser = async (userData) => {
  const { username, email, hashed_password } = userData;

  // Verificar si los valores requeridos están definidos
  if (!username || !email || !hashed_password) {
    throw new Error('Name, email, and hashed_password are required');
  }

  const query = 'INSERT INTO users (username, email, hashed_password) VALUES (?, ?, ?)';
  const [result] = await db.execute(query, [username, email, hashed_password]);
  return { id: result.insertId, ...userData };
};
const updateUser = async (id, newData) => {
  const { username, email, hashed_password } = newData;

  const [result] = await db.execute(
    'UPDATE users SET username = ?, email = ?, hashed_password = ? WHERE id = ?',
    [username, email, hashed_password, id]
  );

  return result.affectedRows > 0;
};

const deleteUser = async (id) => {
  const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};