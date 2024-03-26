// async function foo() {
//   console.log('START');

//   const p1 = await createPromise(4000, 'p1');
//   console.log(p1);

//   console.log('END');
// }

// foo();

// =========================
// async function foo(){}

// const foo = async () => {};

/* const obj = {
  async showName() {},
}; */

/* class User {
  static async showName() {}
  async showName() {}
}
export async function foo() {} */

// [].forEach(async () => {});

// document.addEventListener('click', async () => {});

// ==========================

// const p1 = createPromise(100, 'awd');
// const data = await p1;

// ==========================

// async function foo() {
//   return 10;
// }

// const data = foo();

// console.log(data);

// =========================

/* function getTodos(id) {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  return fetch(url).then(response => response.json());
}

async function foo() {
  const promises = [];

  for (let i = 1; i <= 5; i++) {
    const promise = getTodos(i);
    promises.push(promise);
  }

  const result = await Promise.all(promises);
  console.log(result);
}

foo();
 */

// ============================
import axios from 'axios';

function getComments() {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  return axios.get(url).then(res => res.data);
}
