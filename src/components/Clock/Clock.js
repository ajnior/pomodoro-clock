import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decreaseOneMinute, reset } from '../../redux/actions';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.clock || 0,
      seconds: this.props.seconds || 0,
      isRunning: false,
    };

    this.interval = undefined;

    this.decreaseOneMinute = this.props.decreaseOneMinute;

    this.countdownIntervalFunction = function () {
      if (this.props.minutesLeft > 0) {
        if (this.state.seconds < 1) {
          this.decreaseOneMinute();
          this.resetSeconds();
        } else {
          this.descreaseByOne('seconds');
        }
      } else if (this.state.seconds > 0) {
        this.descreaseByOne('seconds');
      }
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        clearInterval(this.countdownInterval);
      }
    };
  }

  startCountdown = () => {
    if (this.state.isRunning) return null;

    this.setState({
      isRunning: !this.state.isRunning,
    });
    this.interval = setInterval(
      this.countdownIntervalFunction.bind(this),
      1000
    );
  };

  stopCountdown = () => {
    if (!this.state.isRunning) return null;

    this.setState(
      {
        isRunning: !this.state.isRunning,
      },
      () => {
        clearInterval(this.interval);
        this.interval = undefined;
      }
    );
  };

  clearClockInterval() {
    this.setState(
      {
        isRunning: !this.state.isRunning,
      },
      () => {
        clearInterval(this.interval);
        this.interval = undefined;
      }
    );
  }

  startStop = () => {
    if (this.state.isRunning) {
      this.clearClockInterval();
    } else {
      this.setState({
        isRunning: !this.state.isRunning,
      });
      this.interval = setInterval(
        this.countdownIntervalFunction.bind(this),
        1000
      );
    }
  };

  descreaseByOne = (targetProp) => {
    this.setState((prevState) => ({
      [targetProp]: prevState[targetProp] - 1,
    }));
  };

  resetSeconds = () => {
    const seconds = 59;
    this.setState({ seconds });
  };

  reset = () => {
    this.clearClockInterval();
    this.props.resetValues();
  };

  withPadStart(num) {
    return num.toString().padStart(2, '0');
  }

  render = () => {
    const { minutesLeft } = this.props;

    const timeLeft = `${this.withPadStart(minutesLeft)}:${this.withPadStart(
      this.state.seconds
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
    sessionLength: state.sessionLength,
    minutesLeft: state.clock,
  };
}

const mapDispatchToProps = {
  decreaseOneMinute: decreaseOneMinute,
  resetValues: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
