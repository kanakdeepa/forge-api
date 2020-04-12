import axios from 'axios';

export const getApis = async () => {
  const res = await axios.get('https://api.npoint.io/d25c74ffc43f21352fcf');

  return res.data;
};
