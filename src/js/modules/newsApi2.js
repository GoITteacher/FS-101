import axios from 'axios';

export async function getArticles(query, page) {
  const BASE_URL = 'https://free-news.p.rapidapi.com';
  const END_POINT = '/v1/search';
  const url = BASE_URL + END_POINT;

  const params = {
    q: query,
    lang: 'en',
    page,
    page_size: 25,
  };

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
}
