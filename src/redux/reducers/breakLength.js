import { INCREMENT_BREAK, DECREMENT_BREAK, RESET } from '../constants';

const initialState = 5;

function breakLength(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_BREAK:
      return state + 1;
    case DECREMENT_BREAK:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default breakLength;
