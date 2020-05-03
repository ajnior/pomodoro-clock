import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREASE_ONE_MINUTE,
  DECREASE_ONE_SECOND,
  DECREASE_ONE_MINUTE,
  RESET_SECONDS,
  RESET,
  SET_IS_RUNNING,
  SET_BREAK_TIME,
} from '../constants';

export function incrementBreak() {
  return {
    type: INCREMENT_BREAK,
  };
}

export function decrementBreak() {
  return {
    type: DECREMENT_BREAK,
  };
}

export function incrementSession() {
  return {
    type: INCREMENT_SESSION,
  };
}

export function decrementSession() {
  return {
    type: DECREMENT_SESSION,
  };
}

export function decreaseOneMinute() {
  return {
    type: DECREASE_ONE_MINUTE,
  };
}

export function decreaseOneSecond() {
  return {
    type: DECREASE_ONE_SECOND,
  };
}

export function increaseOneMinute() {
  return {
    type: INCREASE_ONE_MINUTE,
  };
}

export function resetSeconds() {
  return {
    type: RESET_SECONDS,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function setIsRunning(bool) {
  return {
    type: SET_IS_RUNNING,
    payload: bool,
  };
}

export function setBreakTime(time) {
  return {
    type: SET_BREAK_TIME,
    payload: time,
  };
}
