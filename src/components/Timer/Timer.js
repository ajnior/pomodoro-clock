import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  decreaseOneMinute,
  decreaseOneSecond,
  resetSeconds,
  reset,
  setIsRunning,
  setBreakTime,
} from '../../redux/actions';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.interval = undefined;

    this.countdownIntervalFunction = function () {
      const { decreaseOneMinute, decreaseOneSecond, resetSeconds } = this.props;

      if (this.props.minutesLeft > 0) {
        if (this.props.secondsLeft < 1) {
          decreaseOneMinute();
          resetSeconds();
        } else {
          decreaseOneSecond();
        }
      } else if (this.props.secondsLeft > 0) {
        decreaseOneSecond();
      }
      if (this.props.minutesLeft === 0 && this.props.secondsLeft === 0) {
        this.stopCountdown();
        if (!this.props.isBreak) {
          return this.startBreak();
        } else {
          return this.startCountdown();
        }
      }
    };
  }

  startCountdown = () => {
    const { setIsRunning } = this.props;
    setIsRunning(true);
    this.interval = setInterval(
      this.countdownIntervalFunction.bind(this),
      1000
    );
  };

  stopCountdown = () => {
    const { setIsRunning } = this.props;
    setIsRunning(false);
    clearInterval(this.interval);
    this.interval = undefined;
  };

  startStop = () => {
    const { isRunning } = this.props;

    if (isRunning) {
      this.stopCountdown();
    } else {
      this.startCountdown();
    }
  };

  startBreak = () => {
    const { breakLength, setBreakTime } = this.props;
    setBreakTime(breakLength);
    this.startCountdown();
  };

  reset = () => {
    const { resetValues } = this.props;
    this.stopCountdown();
    resetValues();
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
