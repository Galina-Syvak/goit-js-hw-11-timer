export class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getRef() {
    this.refs = {
      daysEl: document.querySelector(`${this.selector} [data-value="days"]`),
      hoursEl: document.querySelector(`${this.selector} [data-value="hours"]`),
      minsEl: document.querySelector(`${this.selector} [data-value="mins"]`),
      secsEl: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }

  start() {
    this.getRef();
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;

      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);

      this.refs.daysEl.textContent = days;
      this.refs.hoursEl.textContent = hours;
      this.refs.minsEl.textContent = mins;
      this.refs.secsEl.textContent = secs;
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}
