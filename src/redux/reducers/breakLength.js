const initialState = 5;

function breakLength(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_BREAK':
      console.log('state', state.breakLength);
      return state + 1;
    case 'DECREMENT_BREAK':
      return state - 1;
    default:
      return state;
  }
}

export default breakLength;
