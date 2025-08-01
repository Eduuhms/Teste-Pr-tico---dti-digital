import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', 
});

export const calcularMelhorPetshop = async (data, pequenos, grandes) => {
  const response = await api.post('/melhor-petshop', { data, pequenos, grandes });
  return response.data;
};
