import React from 'react';
import { connect } from 'react-redux';
import {
  incrementSession,
  decrementSession,
  increaseOneMinute,
  decreaseOneMinute,
} from '../../redux/actions';

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
    <div className="session-time">
      <h2 id="session-label">Session Length</h2>
      <div id="session-length">{sessionLength}</div>
      <button
        id="session-increment"
        onClick={() => {
          if (isRunning) return null;
          increment();
          increaseOneMinute();
        }}
      >
        increment
      </button>
      <button
        id="session-decrement"
        onClick={() => {
          if (isRunning) return null;
          decrement();
          decreaseOneMinute();
        }}
      >
        decrement
      </button>
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
