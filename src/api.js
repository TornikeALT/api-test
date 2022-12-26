import axios from 'axios';

const getImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID HsO26U0BoQ-I9uMTHlI6RlFrRBV8Un9X2sknfFGzobo',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default getImages;
