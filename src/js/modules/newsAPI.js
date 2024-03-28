import axios from 'axios';

export async function getArticles(query, currentPage) {
  const BASE_URL = 'https://newsapi.org/v2';
  const END_POINT = '/everything';
  const url = BASE_URL + END_POINT;

  const params = {
    q: query,
    language: 'en',
    pageSize: 6,
    page: currentPage,
  };

  const headers = {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
}
