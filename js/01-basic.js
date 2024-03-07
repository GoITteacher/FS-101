/**
 * Деструктуризація об'єкта
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

/**
 * Глибока деструктуризація об'єкта
 */

const { skills } = user;

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, 3, 4, 5];
