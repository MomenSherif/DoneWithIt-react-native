import axios from './axiosInstance';

export const getListings = () => axios.get('/listings');

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('description', listing.description);
  data.append('categoryId', listing.category.value);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    }),
  );

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  return axios.post('/listings', data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
