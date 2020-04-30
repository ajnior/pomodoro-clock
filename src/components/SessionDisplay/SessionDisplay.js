import React from 'react';
import Clock from '../../utils/Clock';

function SessionDisplay() {
  const clock = new Clock(0, 1, 10);

  console.log(clock.displaytime());

  return (
    <div>
      <h2>SessionDisplay</h2>
      <div>display</div>
      <button onClick={() => clock.start()}>Start</button>
      <button onClick={() => clock.start()}>Start</button>
    </div>
  );
}

export default SessionDisplay;
