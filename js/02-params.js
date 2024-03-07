/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
function getUserName(obj) {
  console.log(
    `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
  );
}

// З деструктуризацією

getUserName(user);
