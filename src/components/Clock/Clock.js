import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.minutes,
      seconds: this.props.seconds,
      isRunning: false,
    };

    this.interval = undefined;

    this.countdownIntervalFunction = function () {
      if (this.state.minutes > 0) {
        if (this.state.seconds < 1) {
          this.descreaseByOne('minutes');
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

  descreaseByOne = (targetProp) => {
    this.setState((prevState) => ({
      [targetProp]: prevState[targetProp] - 1,
    }));
  };

  resetSeconds = () => {
    const seconds = 59;
    this.setState({ seconds });
  };

  render = () => {
    const { minutes, seconds } = this.state;
    return (
      <>
        <p>
          {minutes}:{seconds}
        </p>
        <button onClick={this.startCountdown}>startCountdown</button>
        <button onClick={this.stopCountdown}>stopCountdown</button>
      </>
    );
  };
}

export default Clock;
