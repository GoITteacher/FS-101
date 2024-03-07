import axios from 'axios';

export class NewsAPI {
  static PAGE_SIZE = 30;

  constructor() {
    this.BASE_URL = 'https://newsapi.org/v2';
    this.END_POINT = '/everything';
    this.query = null;
    this.page = 1;
    this.totalResult = 0;
  }

  getArticles() {
    const params = {
      apiKey: 'c8747511a2c34730a83caaff4f3693e7',
      q: this.query,
      pageSize: NewsAPI.PAGE_SIZE,
      page: this.page,
    };
    const url = `${this.BASE_URL}${this.END_POINT}`;
    return axios.get(url, { params }).then(res => {
      if (res.data.articles.length === 0) {
        throw new Error('Empty');
      } else {
        return res.data;
      }
    });
  }
}
