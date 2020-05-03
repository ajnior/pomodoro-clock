import React from 'react';
import { connect } from 'react-redux';
import { incrementBreak, decrementBreak } from '../../redux/actions';

function BreakTime(props) {
  const { breakLength, increment, decrement } = props;

  return (
    <div className="break-time">
      <h2 id="break-label">Break Length</h2>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={increment}>
        increment
      </button>
      <button id="break-decrement" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    breakLength: state.breakLength,
  };
}

const mapDispatchToProps = {
  increment: incrementBreak,
  decrement: decrementBreak,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreakTime);
