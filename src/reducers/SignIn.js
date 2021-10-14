const initialState = {
  user: {},
  error: '',
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, user: action.payload }
    case 'SIGN_IN_ERROR':
      return { ...state, error: action.payload }
    default:
     return state;
  }
}

export default loginReducer;
