import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.9:9000/api',
});

instance.interceptors.response.use((res) => res.data);

export default instance;
