export class UsersAPI {
  constructor() {
    this.BASE_URL = 'http://localhost:3000';
    this.END_POINT = '/users';
    this.API_KEY = '123123';
  }

  getUsers() {
    const url = this.BASE_URL + this.END_POINT;
    return fetch(url).then(res => res.json());
  }
}
