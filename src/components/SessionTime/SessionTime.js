import React from 'react';
import { connect } from 'react-redux';
import {
  incrementSession,
  decrementSession,
  increaseOneMinute,
  decreaseOneMinute,
} from '../../redux/actions';

import { ReactComponent as PlusIcon } from '../../assets/images/icons/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/images/icons/minus-icon.svg';

function SessionTime(props) {
  const {
    sessionLength,
    isRunning,
    increment,
    decrement,
    increaseOneMinute,
    decreaseOneMinute,
  } = props;

  return (
    <div className="pomodoro-clock__session">
      <h2 id="session-label">Session</h2>
      {/* <button
        id="session-decrement"
        onClick={() => {
          if (isRunning) return null;
          decrement();
          decreaseOneMinute();
        }}
      >
        decrement
      </button> */}
      <MinusIcon
        id="session-decrement"
        className="pomodoro-clock__icon"
        onClick={() => {
          if (isRunning) return null;
          decrement();
          decreaseOneMinute();
        }}
      />
      <div id="session-length" className="pomodoro-clock__length-display">
        {sessionLength}
      </div>
      {/* <button
        id="session-increment"
        onClick={() => {
          if (isRunning) return null;
          increment();
          increaseOneMinute();
        }}
      >
        increment
      </button> */}
      <PlusIcon
        id="session-increment"
        className="pomodoro-clock__icon"
        onClick={() => {
          if (isRunning) return null;
          increment();
          increaseOneMinute();
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sessionLength: state.sessionLength,
    isRunning: state.timer.isRunning,
  };
}

const mapDispatchToProps = {
  increment: incrementSession,
  decrement: decrementSession,
  increaseOneMinute: increaseOneMinute,
  decreaseOneMinute: decreaseOneMinute,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionTime);
