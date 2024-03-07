/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

/**
 * Видалення
 */

/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};
