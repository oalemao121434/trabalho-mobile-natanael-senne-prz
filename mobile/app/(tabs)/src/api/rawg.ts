import axios from 'axios';

const API_KEY = 'COLOQUE_SUA_CHAVE_AQUI'; // obtenha em https://rawg.io/apidocs
const BASE_URL = 'https://api.rawg.io/api';

export const fetchJogosPopulares = async () => {
  const res = await axios.get(`${BASE_URL}/games`, {
    params: {
      key: API_KEY,
      ordering: '-rating',
      page_size: 3,
    },
  });
  return res.data.results;
};
