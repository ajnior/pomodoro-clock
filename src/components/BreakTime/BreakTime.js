import React from 'react';
import { connect } from 'react-redux';
import { incrementBreak, decrementBreak } from '../../redux/actions';

function BreakTime(props) {
  const { breakLength, increment, decrement, isRunning } = props;

  function handleBreakAction(dispatch) {
    if (isRunning) return null;
    dispatch();
  }

  return (
    <div className="break-time">
      <h2 id="break-label">Break Length</h2>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={() => handleBreakAction(increment)}>
        increment
      </button>
      <button id="break-decrement" onClick={() => handleBreakAction(decrement)}>
        decrement
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    breakLength: state.breakLength,
    isRunning: state.timer.isRunning,
  };
}

const mapDispatchToProps = {
  increment: incrementBreak,
  decrement: decrementBreak,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreakTime);
