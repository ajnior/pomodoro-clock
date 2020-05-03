import { INCREMENT_BREAK, DECREMENT_BREAK, RESET } from '../constants';

const initialState = 5;
const limit = 60;

function breakLength(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_BREAK:
      if (state + 1 > limit) return state;
      return state + 1;
    case DECREMENT_BREAK:
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

export default breakLength;
