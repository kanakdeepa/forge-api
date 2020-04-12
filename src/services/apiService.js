import axios from 'axios';

const apiUrl = 'https://raw.githubusercontent.com/kanakdeepa/forge-api/master/src/data/data.json';

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const getApis = async (page = 1) => {
  await sleep(900);
  const res = await axios.get(apiUrl + '?page=' + page);
  return res.data;
};
