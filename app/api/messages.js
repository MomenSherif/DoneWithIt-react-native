import axios from './axiosInstance';

export const send = (message, listingId) =>
  axios.post('/messages', { message, listingId });
