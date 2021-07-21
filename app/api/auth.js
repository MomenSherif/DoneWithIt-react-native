import axios from './axiosInstance';

export const login = (credentials) => axios.post('/auth', credentials);

export const register = (userInfo) => axios.post('/users', userInfo);
