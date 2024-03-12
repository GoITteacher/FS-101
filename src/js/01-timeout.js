/*
 * Метод window.setTimeout(callback, delay, args)
 */

// function sayHello() {
//   console.log('Hello world');
// }

// setTimeout(sayHello, 200);
// setTimeout(sayHello, 1000);
// setTimeout(sayHello, 3000);

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

/* const timeoutId = setTimeout(() => {
  console.log('Hello 1');
}, 5000);

setTimeout(() => {
  console.log('hello 2');
}, 2000);

setTimeout(() => {
  console.log('hello 3');
}, 4000);

clearTimeout(timeoutId); */

/**
 * Можливість передати параметри для колбеку
 */

for (let i = 0; i < 5; i++) {
  //   setTimeout(sayHello, i * 1000, i);
  setTimeout(() => {
    sayHello(i, 10, 20);
  }, 5000);
}

function sayHello(i) {
  console.log(i);
}
