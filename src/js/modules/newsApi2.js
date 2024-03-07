const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
const END_POINT = '/search';
const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
  },
};

export class NewsAPI {
  query = '';
  #pageSize = 10;
  page = 1;
  total_pages = 1;

  getArticles() {
    const PARAMS = new URLSearchParams({
      q: this.query,
      page_size: this.#pageSize,
      page: this.page,
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    return fetch(url, options).then(res => res.json());
  }

  get pageSize() {
    return this.#pageSize;
  }
}
