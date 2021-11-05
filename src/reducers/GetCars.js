const initialState = {
  cars: [],
  error: '',
};

const getCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAVE':
      return { ...state, cars: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default getCarsReducer;
