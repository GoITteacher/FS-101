/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

let intervalId = null;
const startBtn = document.querySelector('[data-action-start]');
const stopBtn = document.querySelector('[data-action-stop]');
const clockFace = document.querySelector('.clockface');

let initTime = new Date('03.12.2024 22:05');
let userTime = 0;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime;

    const time = formatTime(diff);
    clockFace.textContent = time;
    if (diff < 1000) clearInterval(intervalId);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  userTime += Date.now() - initTime;
  console.log(userTime);
});

const formatTime = milliseconds => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':');
};
