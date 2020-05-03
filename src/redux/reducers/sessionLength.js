import { INCREMENT_SESSION, DECREMENT_SESSION, RESET } from '../constants';

const limit = 60;
const minimum = 1;
const initialState = 25;

function sessionLength(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_SESSION:
      const isGreaterThanLimit = state + 1 > limit;
      if (isGreaterThanLimit) return state;
      return state + 1;
    case DECREMENT_SESSION:
      const nextState = state - 1;
      const isLessThanMinimum = nextState < minimum;
      if (isLessThanMinimum) {
        return state;
      }
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default sessionLength;
