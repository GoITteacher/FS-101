/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector(".js-alert");

/*
 * Функції
 */
function onNotificationClick() {}

function showNotification() {
  console.log(
    "Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим"
  );
}

function hideNotification() {}
