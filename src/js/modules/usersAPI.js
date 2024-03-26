import axios from 'axios';

export async function getUsers() {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.get(url);
  return res.data;
}

export async function createUser(user) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}`;
  const res = await axios.post(url, user);
  return res.data;
}

export function updateUser({ id, ...user }) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}/${id}`;
  return axios.patch(url, user).then(res => res.data);
}
export function resetUser({ id, ...user }) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  return axios.put(url, user).then(res => res.data);
}
export function deleteUser(id) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}
