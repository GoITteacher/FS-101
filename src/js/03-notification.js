/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId; // = 7
const notification = document.querySelector('.js-alert');

/*
 * Функції
 */

// ===================================
setTimeout(() => {
  console.log('START');
  showNotification();

  timeoutId = setTimeout(() => {
    hideNotification();
    console.log('FINISH');
  }, NOTIFICATION_DELAY);
}, NOTIFICATION_DELAY);

// ===================================

notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});

// ===================================
function showNotification() {
  notification.classList.add('is-visible');
}

function hideNotification() {
  notification.classList.remove('is-visible');
}
