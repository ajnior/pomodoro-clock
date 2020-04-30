import React from 'react';
import { connect } from 'react-redux';
import { incrementSession, decrementSession } from '../../redux/actions';

function SessionTime(props) {
  const { sessionLength, increment, decrement } = props;

  return (
    <div>
      <h2>Session Length</h2>
      <div>{sessionLength}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sessionLength: state.sessionLength,
  };
}

const mapDispatchToProps = {
  increment: incrementSession,
  decrement: decrementSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionTime);
