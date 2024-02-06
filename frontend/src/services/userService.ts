import axios from 'axios';

const API_URL = 'http://localhost:3000/users'; 

// Obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los usuarios');
  }
};

// Obtener un usuario por su ID
export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el usuario');
  }
};

// Actualizar un usuario
export const updateUser = async (id: string, userData: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el usuario');
  }
};

// Eliminar un usuario
export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
};