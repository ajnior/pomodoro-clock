import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  decreaseOneMinute,
  decreaseOneSecond,
  resetSeconds,
  reset,
  setIsRunning,
  setBreakTime,
  setMinutes,
} from '../../redux/actions';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.interval = undefined;
    this.currSession = true;
    this.audioRef = this.props.audioRef;
    this.setIsRunning = this.props.setIsRunning;
    this.setMinutes = this.props.setMinutes;
    this.setBreakTime = this.props.setBreakTime;

    this.countdownIntervalFunction = function () {
      const { decreaseOneMinute, decreaseOneSecond, resetSeconds } = this.props;

      if (this.props.minutesLeft <= 0 && this.props.secondsLeft <= 0) {
        this.stopCountdown();
        this.playBeep();
        if (!this.props.isBreak) {
          return this.startBreak(this.props.breakLength);
        } else {
          return this.startCountdown(this.props.sessionLength, false);
        }
      }

      if (this.props.minutesLeft > 0) {
        if (this.props.secondsLeft < 1) {
          decreaseOneMinute();
          resetSeconds();
          return;
        } else {
          decreaseOneSecond();
          return;
        }
      } else {
        decreaseOneSecond();
        return;
      }
    };
  }

  startCountdown = (timeLength, isBreak = false) => {
    this.setBreakTime(isBreak);
    if (!this.currSession) {
      this.setMinutes(timeLength);
    }
    this.setIsRunning(true);
    this.interval = setInterval(
      this.countdownIntervalFunction.bind(this),
      1000
    );
  };

  stopCountdown = () => {
    this.setIsRunning(false);
    clearInterval(this.interval);
    this.interval = undefined;
  };

  startStop = () => {
    const { sessionLength, isRunning } = this.props;
    if (isRunning) {
      this.stopCountdown();
    } else {
      this.startCountdown(sessionLength);
    }
  };

  startBreak = () => {
    const { breakLength } = this.props;
    setMinutes(breakLength);
    this.startCountdown(breakLength, true);
  };

  reset = () => {
    const { resetValues } = this.props;
    this.stopCountdown();
    this.currSession = false;
    resetValues();
    this.reloadBeep();
  };

  playBeep = () => {
    this.audioRef.current.play();
  };

  reloadBeep = () => {
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0;
  };

  withPadStart(num) {
    return num.toString().padStart(2, '0');
  }

  render = () => {
    const { minutesLeft, secondsLeft } = this.props;

    const timeLeft = `${this.withPadStart(minutesLeft)}:${this.withPadStart(
      secondsLeft
    )}`;

    return (
      <>
        <div id="time-left">{timeLeft}</div>
        <button id="start_stop" onClick={this.startStop}>
          start/stop
        </button>
        <button id="reset" onClick={this.reset}>
          reset
        </button>
      </>
    );
  };
}

function mapStateToProps(state) {
  return {
    breakLength: state.breakLength,
    sessionLength: state.sessionLength,
    minutesLeft: state.timer.minutes,
    secondsLeft: state.timer.seconds,
    isRunning: state.timer.isRunning,
    isBreak: state.timer.isBreak,
  };
}

const mapDispatchToProps = {
  decreaseOneMinute: decreaseOneMinute,
  decreaseOneSecond: decreaseOneSecond,
  resetSeconds: resetSeconds,
  resetValues: reset,
  setIsRunning: setIsRunning,
  setBreakTime: setBreakTime,
  setMinutes: setMinutes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
