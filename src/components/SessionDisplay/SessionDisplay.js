import React from 'react';
import Clock from '../Clock';

function SessionDisplay() {
  return (
    <div>
      <h2>SessionDisplay</h2>
      <div>display</div>
      <Clock minutes={1} seconds={5} />
    </div>
  );
}

export default SessionDisplay;
