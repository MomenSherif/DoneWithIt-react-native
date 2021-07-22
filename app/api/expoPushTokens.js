import axios from './axiosInstance';

export const register = (token) => axios.post('/expoPushTokens', { token });
