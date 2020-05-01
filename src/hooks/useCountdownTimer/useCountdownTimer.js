/* eslint-disable eqeqeq */
import { useState } from 'react';

function useCountdownTimer({ mm = 0, ss = 0 }) {
  const [minutes, setMinutes] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [isCountingdown, setIsCountingdown] = useState(false);

  function descreaseByOne(setStateFunction) {
    return setStateFunction((prevState) => prevState - 1);
  }

  function resetSeconds() {
    setSeconds((prevState) => 59); // refactor
  }

  function startCountdown() {
    setIsCountingdown(true);
    countdown();
  }

  function countdown() {
    const countdownInterval = setInterval(function () {
      if (minutes > 0) {
        if (seconds < 1) {
          descreaseByOne(setMinutes);
          resetSeconds(); // refactor
        } else {
          descreaseByOne(setSeconds);
        }
      } else if (seconds > 0) {
        descreaseByOne(setSeconds);
      }
      if (minutes == 0 && seconds == 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  return { minutes, seconds, isCountingdown, startCountdown };
}

export default useCountdownTimer;
