import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
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
