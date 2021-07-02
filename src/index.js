import './sass/main.scss';

const refs = {
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      const { days, hours, mins, secs } = getTimeComponents(
        startTime - this.targetDate - deltaTime,
      );

      refs.daysEl.textContent = days;
      refs.hoursEl.textContent = hours;
      refs.minsEl.textContent = mins;
      refs.secsEl.textContent = secs;
    }, 1000);
  }
}

const timer = new CountdownTimer('#timer-1', new Date('Jul 17, 2019'));
timer.start();

// const timer1 = new CountdownTimer('#timer-12', new Date('Jul 19, 2019'));
// timer1.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
