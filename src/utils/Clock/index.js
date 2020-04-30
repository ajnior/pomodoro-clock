function Clock(hours = 0, minutes = 0, seconds = 0) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}

Clock.prototype.displaytime = function () {
  return `${this.minutes}:${this.seconds}`;
};

Clock.prototype.start = function () {
  var oneSecondInterval = setInterval(
    function countTimeDown() {
      if (this.minutes > 0) {
        if (this.seconds < 1) {
          this.minutes = this.minutes - 1;
          this.seconds = 59;
        } else {
          this.seconds = this.seconds - 1;
        }
      } else if (this.seconds > 0) {
        this.seconds = this.seconds - 1;
      }

      if (this.minutes == 0 && this.seconds == 0) {
        clearInterval(oneSecondInterval);
      }

      console.log('this:', this);
    }.bind(this),
    1000
  );
};

Clock.prototype.stop = function () {
  clearInterval();
};

export default Clock;
