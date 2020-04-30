const initialState = 25;

function sessionLength(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_SESSION':
      console.log('increment session');
      return { ...state, sessionLength: state.sessionLength + 1 };
    case 'DECREMENT_SESSON':
      return { ...state, sessionLength: state.sessionLength - 1 };
    default:
      return state;
  }
}

export default sessionLength;
