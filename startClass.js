const targetDate = new Date("Oct 27, 2021 15:37:25").getTime();

class CountdownTimer { 
    constructor(targetDate) {
        this.targetDate = targetDate;
        this.refs = this.getRefs();
    }

    getRefs() {
        const refs = {};
        refs.innerDays = document.querySelector('span[data-value=days]'),
        refs.innerHours = document.querySelector('span[data-value=hours]'),
        refs.innerMins = document.querySelector('span[data-value=mins]'),
        refs.innerSecs = document.querySelector('span[data-value=secs]')
        
        return refs;
    }
    
    startTimer() {
        setInterval(() => {
          this.timer();
        }
        , 1000)
    }
    
    timer() {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
    
     this.refs.innerDays.textContent = days;
     this.refs.innerHours.textContent = hours;
     this.refs.innerMins.textContent = mins;
     this.refs.innerSecs.textContent = secs;
    }
    
     getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
        return { days, hours, mins, secs };
    }
    
    pad(value) {
        return String(value).padStart(2, '0');
    }
}

let downTimer = new CountdownTimer(targetDate);
downTimer.timer();
downTimer.startTimer();



