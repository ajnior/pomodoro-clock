import React from 'react';
import { connect } from 'react-redux';
import { incrementBreak, decrementBreak } from '../../redux/actions';

import { ReactComponent as PlusIcon } from '../../assets/images/icons/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/images/icons/minus-icon.svg';

function BreakTime(props) {
  const { breakLength, increment, decrement, isRunning } = props;

  function handleBreakAction(dispatch) {
    if (isRunning) return null;
    dispatch();
  }

  return (
    <div className="pomodoro-clock__break">
      <h2 id="break-label">Break</h2>
      <button id="break-decrement" onClick={() => handleBreakAction(decrement)}>
        decrement
        <MinusIcon className="pomodoro-clock__icon" />
      </button>
      <div id="break-length" className="pomodoro-clock__length-display">
        {breakLength}
      </div>
      <button id="break-increment" onClick={() => handleBreakAction(increment)}>
        increment
        <PlusIcon className="pomodoro-clock__icon" />
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
