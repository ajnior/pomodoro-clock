import React from 'react';
import Timer from '../Timer';
import { connect } from 'react-redux';

function SessionDisplay({ isBreak, audioRef }) {
  const label = isBreak ? 'Break' : 'Session';

  return (
    <div>
      <h2 id="timer-label">{label}</h2>
      <Timer audioRef={audioRef} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isBreak: state.timer.isBreak,
  };
}

export default connect(mapStateToProps)(SessionDisplay);
