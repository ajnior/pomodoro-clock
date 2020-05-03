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
          increment();
          increaseOneMinute();
        }}
      >
        increment
      </button>
      <button
        id="session-decrement"
        onClick={() => {
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
    clockLength: state.clock,
  };
}

const mapDispatchToProps = {
  increment: incrementSession,
  decrement: decrementSession,
  increaseOneMinute: increaseOneMinute,
  decreaseOneMinute: decreaseOneMinute,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionTime);
