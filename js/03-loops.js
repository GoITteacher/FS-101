/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: "Kate",
  },
  {
    name: "Alex",
  },
  {
    name: "Mark",
  },
];

/**
 * Без деструктуризації
 */
const names = [];

for (const user of users) {
  names.push(user.name);
}

console.log(names);

/**
 * З деструктуризацією
 */
