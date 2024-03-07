/*
 * Метод window.setTimeout(callback, delay, args)
 */

console.log("До виклику setTimeout");

console.log("1 - Всередині зворотного виклику для setTimeout");

console.log("2 - Всередині зворотного виклику для setTimeout");

console.log("Після виклику setTimeout");

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const logger = (time) => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
};

/**
 * Можливість передати параметри для колбеку
 */
const id = setTimeout((name, country) => {
  console.log(`Hello, my name is ${name}, I'm from ${country}`);
}, 1000);
