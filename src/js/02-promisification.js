/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс✅❌
 */

/* function createPromise(delay, state, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'green') {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const p1 = createPromise(5000, 'green', 'p1');
const p2 = createPromise(2000, 'red', 'p2');
const p3 = createPromise(4000, 'green', 'p3');

p1.then(onFulFilled).catch(onRejected);
p2.then(onFulFilled).catch(onRejected);
p3.then(onFulFilled).catch(onRejected);

function onFulFilled(data) {
  console.log(`✅ - ${data}`);
}

function onRejected(data) {
  console.log(`❌ - ${data}`);
} */
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function foo() {
//   const arr = [];
//   // ...
//   return Promise.resolve(arr);
// }

// function foo() {
//   const arr = [1, 2, 3, 45];

//   return Promise.resolve(arr);
// }

// foo()
//   .then(value => {
//     console.log(value);
//   })
//   .catch();

// ==========================================
/* 
function createPromise(delay, isActive, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const p1 = createPromise(1000, false, 'мясо');
const p2 = createPromise(4000, true, 'картопля');
const p3 = createPromise(2000, false, 'пампушки');
const p4 = createPromise(5000, true, 'сметана');

const promises = [p1, p2, p3, p4];

Promise.race(promises)
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  }); */

// =======================
// Promise.allSettled(promises).then(result => {
//   console.log(result);
// });
// =======================
/* Promise.all(promises)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  }); */

// ======================
