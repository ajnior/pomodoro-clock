const initialState = 25;

function sessionLength(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_SESSION':
      return state + 1;
    case 'DECREMENT_SESSION':
      return state - 1;
    default:
      return state;
  }
}

export default sessionLength;
