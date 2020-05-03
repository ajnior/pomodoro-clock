import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  DECREASE_BY_ONE,
  INCREASE_BY_ONE,
  RESET,
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
    type: DECREASE_BY_ONE,
  };
}

export function increaseOneMinute() {
  return {
    type: INCREASE_BY_ONE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
