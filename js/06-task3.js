/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter(a, b, c, d) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const perimeter = calculateHousePerimeter(10, 15, 10, 15);
console.log(`Периметр будинку: ${perimeter}`);
