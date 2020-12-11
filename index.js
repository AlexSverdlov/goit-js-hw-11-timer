// Контрольная дата
const targetDate1 = new Date(2021, 0);

// Ссылки на элементы HTML
const refs = {
  days: document.querySelector('span[data-value=days]'),
  hours: document.querySelector('span[data-value=hours]'),
  mins: document.querySelector('span[data-value=mins]'),
  secs: document.querySelector('span[data-value=secs]'),
};

// Служебная функция
function pad(value) {
  return String(value).padStart(2, '0');
}

// Функция считает элементы таймера и выводит на страницу
function showTime() {
  const targetDate2 = new Date();
  const time = targetDate1 - targetDate2;
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

// Вызов функции showTime каждую секунду
setInterval(showTime, 1000);
