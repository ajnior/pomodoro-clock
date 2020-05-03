import { INCREMENT_SESSION, DECREMENT_SESSION, RESET } from '../constants';

const initialState = 25;

function sessionLength(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_SESSION:
      return state + 1;
    case DECREMENT_SESSION:
      const nextState = state - 1;
      const isLessThanOne = nextState < 1;
      if (isLessThanOne) {
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
