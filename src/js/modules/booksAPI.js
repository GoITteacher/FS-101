import Axios from 'axios';

const myAxios = Axios.create({
  baseURL: 'http://localhost:3000/books',
  headers: {
    api_key: 'awdawdawdawd',
  },
  params: {
    api_key: 'Hello',
  },
});

export class BooksAPI2 {
  constructor() {
    this.BASE_URL = 'http://localhost:3000';
    this.END_POINT = '/books';
    this.API_KEY = '123123';
  }

  async getBooks() {
    const url = this.BASE_URL + this.END_POINT;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  createBook(data) {
    const url = this.BASE_URL + this.END_POINT;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetch(url, options).then(res => res.json());
  }

  updateBook(id, book) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  resetBook(id, book) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  deleteBook(id) {
    const url = `${this.BASE_URL}${this.END_POINT}/${id}`;

    const options = {
      method: 'DELETE',
    };

    return fetch(url, options).then(res => res.json());
  }
}

export class BooksAPI {
  async getBooks() {
    const params = {
      myParam: 'Hello World',
    };

    const headers = {};

    const res = await myAxios.get('', { params, headers });
    return res.data;
  }

  async createBook(data) {
    const res = await myAxios.post('', data);
    return res.data;
  }

  async updateBook(id, book) {
    const res = await myAxios.patch(`/${id}`, book);
    return res.data;
  }

  async resetBook(id, book) {
    const res = await myAxios.put(`/${id}`, book);
    return res.data;
  }

  deleteBook(id) {
    return myAxios.delete(`/${id}`);
  }
}
