import axios from 'axios';
import * as cache from '../utlities/cache';
import * as authStorage from '../store/storage';

const instance = axios.create({
  baseURL: 'http://192.168.1.9:9000/api',
});

instance.interceptors.request.use(async (config) => {
  const authToken = await authStorage.getToken();
  if (authToken) config.headers['x-auth-token'] = authToken;
  return config;
});

instance.interceptors.response.use(
  (res) => {
    if (res.config.method === 'get') cache.store(res.config.url, res.data);
    return res.data;
  },
  async (error) => {
    const cachedData = await cache.get(error.config.url);
    return (
      cachedData ??
      Promise.reject(error.response?.data?.error ?? 'NETWORK_ERROR')
    );
  },
);

export default instance;
