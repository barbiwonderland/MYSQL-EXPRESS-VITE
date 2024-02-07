import axios from 'axios';
import Tweet from '../interfaces/Tweet';

const API_URL = 'http://localhost:3000/tweets'; 

// Obtener todos los tweets
export const getAllTweets = async (): Promise<Tweet[]> => {
    try {
      const response = await axios.get(API_URL);
      return response.data as Tweet[];
    } catch (error) {
      throw new Error('Error al obtener los tweets');
    }
  };
// Obtener un tweet por su ID
export const getTweetById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el tweet');
  }
};

// Crear un nuevo tweet
/* export const createTweet = async (tweetData: any) => {
  try {
    const response = await axios.post(API_URL, tweetData);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear el tweet');
  }
}; */

// Actualizar un tweet
export const updateTweet = async (id: string, tweetData: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, tweetData);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar el tweet');
  }
};

// Eliminar un tweet
export const deleteTweet = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar el tweet');
  }
};