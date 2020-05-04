import {
  INCREASE_ONE_MINUTE,
  DECREASE_ONE_MINUTE,
  DECREASE_ONE_SECOND,
  RESET_SECONDS,
  RESET,
  SET_IS_RUNNING,
  SET_BREAK_TIME,
  SET_MINUTES,
} from '../constants/index';

const minimumStartValue = 1;

const initialState = {
  minutes: 25,
  seconds: 0,
  isRunning: false,
  isBreak: false,
};

function timer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_ONE_MINUTE:
      return Object.assign({}, state, { minutes: state.minutes + 1 });
    case DECREASE_ONE_MINUTE:
      if (!state.isRunning && state.minutes <= minimumStartValue) return state;
      if (state.isRunning && state.minutes < 1) return state;
      return Object.assign({}, state, { minutes: state.minutes - 1 });
    case DECREASE_ONE_SECOND:
      return Object.assign({}, state, { seconds: state.seconds - 1 });
    case RESET_SECONDS:
      return Object.assign({}, state, { seconds: 59 });
    case RESET:
      return initialState;
    case SET_IS_RUNNING:
      return Object.assign({}, state, { isRunning: action.payload });
    case SET_BREAK_TIME:
      return Object.assign({}, state, {
        isBreak: action.payload,
      });
    case SET_MINUTES: {
      return Object.assign({}, state, { minutes: action.payload });
    }
    default:
      return state;
  }
}

export default timer;
