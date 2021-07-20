import axios from 'axios';
import * as cache from '../utlities/cache';

const instance = axios.create({
  baseURL: 'http://192.168.1.9:9000/api',
});

instance.interceptors.response.use(
  (res) => {
    if (res.config.method === 'get') cache.store(res.config.url, res.data);
    return res.data;
  },
  (error) => {
    const cachedData = cache.get(error.config.url);
    return cachedData ?? Promise.reject(error);
  },
);

export default instance;
