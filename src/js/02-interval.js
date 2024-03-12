/*
 * Метод setInterval(callback, delay, args)
 */

const intervalId1 = setInterval(() => {
  console.log('hello');
}, 1000);

const intervalId2 = setInterval(() => {
  console.log('-------');
}, 5000);

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

setTimeout(() => {
  clearInterval(intervalId1);
}, 20000);
