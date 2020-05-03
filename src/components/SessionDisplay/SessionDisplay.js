import React from 'react';
import Clock from '../Clock';
import { connect } from 'react-redux';

function SessionDisplay({ sessionLength }) {
  return (
    <div>
      <h2 id="timer-label">Session</h2>
      <Clock minutes={sessionLength} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sessionLength: state.sessionLength,
  };
}

export default connect(mapStateToProps)(SessionDisplay);
