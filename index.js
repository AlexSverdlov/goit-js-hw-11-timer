// Создаем класс CountdownTimer

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  showTime() {
    const time = this.targetDate - new Date();
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    const refs = {
      days: document.querySelector('span[data-value=days]'),
      hours: document.querySelector('span[data-value=hours]'),
      mins: document.querySelector('span[data-value=mins]'),
      secs: document.querySelector('span[data-value=secs]'),
    };

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }

  tickTime() {
    setInterval(() => this.showTime(), 1000);
  }
}

// Создаем экземпляр класса
const oneCountdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 0),
});

// Вызываем метод для перевоначальной инициализации элементов таймера
oneCountdownTimer.showTime();
// Запускаем таймер
oneCountdownTimer.tickTime();
