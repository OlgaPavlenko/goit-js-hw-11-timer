const targetDate = new Date("Oct 27, 2021 15:37:25").getTime();

const refs = {
  innerDays: document.querySelector('span[data-value=days]'),
  innerHours: document.querySelector('span[data-value=hours]'),
  innerMins: document.querySelector('span[data-value=mins]'),
  innerSecs: document.querySelector('span[data-value=secs]')
}

  
const startTimer = function() {
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = targetDate - currentTime;
        const { days, hours, mins, secs } = getTimeComponents(deltaTime);

       refs.innerDays.textContent = days;
       refs.innerHours.textContent = hours;
       refs.innerMins.textContent = mins;
       refs.innerSecs.textContent = secs;
    }
    , 1000)
}

startTimer();
  
  function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  function pad(value) {
      return String(value).padStart(2, '0');
  }
