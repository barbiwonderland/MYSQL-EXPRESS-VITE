import axios from 'axios';

const API_URL = 'http://localhost:3000/interactions'; 

// Obtener todas las interacciones
export const getAllInteractions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las interacciones');
  }
};

// Obtener una interacción por su ID
export const getInteractionById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la interacción');
  }
};

// Actualizar una interacción
export const updateInteraction = async (id: string, interactionData: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, interactionData);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar la interacción');
  }
};

// Eliminar una interacción
export const deleteInteraction = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar la interacción');
  }
};