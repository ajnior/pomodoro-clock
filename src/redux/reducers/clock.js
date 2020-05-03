import { INCREASE_BY_ONE, DECREASE_BY_ONE, RESET } from '../constants/index';

const initialState = 25;

function clock(state = initialState, action) {
  switch (action.type) {
    case INCREASE_BY_ONE:
      return state + 1;
    case DECREASE_BY_ONE:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default clock;
