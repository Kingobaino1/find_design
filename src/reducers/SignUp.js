const initialState = {
  headers: [],
  error: '',
};
const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { ...state, headers: action.payload }
    case 'SIGN_ERROR':
      return { ...state, error: action.payload }
    default:
     return state;
  }
}

export default registrationReducer;
