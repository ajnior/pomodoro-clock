import React from 'react';
import useCountdownTimer from '../../hooks/useCountdownTimer';

function SessionDisplay() {
  const {
    minutes,
    seconds,
    isCountingdown,
    startCountdown,
  } = useCountdownTimer({
    mm: 1,
    ss: 10,
  });

  return (
    <div>
      <h2>SessionDisplay</h2>
      <div>display</div>
      <div>is countingdown: {isCountingdown}</div>
      <div>
        {minutes}:{seconds}
      </div>
      <div onClick={startCountdown}>start countdown</div>
    </div>
  );
}

export default SessionDisplay;
