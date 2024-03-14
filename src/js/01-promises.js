/**
 * Створення та обробка промісу
 * - Клас Promise +
 * - resolve +
 * - reject -
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   const delay = Math.random() * 5000;
//   setTimeout(() => {
//     const random = Math.random();
//     if (random > 0.5) {
//       resolve(delay);
//     } else {
//       reject(delay);
//     }
//   }, delay);
// });

// =====================================

// promise.then(onFulFilled, onRejected);

// function onFulFilled(message) {
//   console.log(message, 'Ok');
// }

// function onRejected(message) {
//   console.log(message, 'Error');
// }

// =====================================
// promise.then(
//   () => {
//     console.log('Ok');
//   },
//   () => {
//     console.log('Error');
//   },
// );

// =========================================

// const promise = fetch('https://jsonplaceholder.typicode.com/todos').then(
//   response => response.json(),
// );

// ==========

// console.log(promise);

// promise.then(value => {
//   console.log(value);
// });

// =========================================
// promise
//   .then(value => {
//     console.log('Ok', value);
//   })
//   .catch(value => {
//     console.log('Error', value);
//   });
// =======================================

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve(10);
//   } else {
//     reject('Sorry');
//   }
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('The end');
//     console.log('The end');
//     console.log('The end');
//     console.log('The end');
//     console.log('The end');
//   });

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// =============================
// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve(10);
//   } else {
//     reject(10);
//   }
// });

// promise
//   .then(value1 => {
//     console.log(value1);
//     return value1 * 2;
//   })
//   .then(value2 => {
//     console.log(value2);
//     return value2 / 4;
//   })
//   .catch(err => {
//     console.log(err);
//   });
