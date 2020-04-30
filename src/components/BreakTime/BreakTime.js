import React from 'react';
import { connect } from 'react-redux';
import { incrementBreak, decrementBreak } from '../../redux/actions';

function BreakTime(props) {
  const { breakLength, increment, decrement } = props;

  return (
    <div>
      <h2>Break Length</h2>
      <div>{breakLength}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
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
