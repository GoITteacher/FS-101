import axios from 'axios';

export async function fetchArticles(query, currentPage) {
  const API_KEY = 'c8747511a2c34730a83caaff4f3693e7';
  const BASE_URL = 'https://newsapi.org/v2';
  const END_POINT = '/everything';
  const url = `${BASE_URL}${END_POINT}`;

  const params = {
    apiKey: API_KEY,
    language: 'en',
    sortBy: 'popularity',
    q: query,
    pageSize: 15,
    page: currentPage,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
