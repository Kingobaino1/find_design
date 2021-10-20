const initialState = {
  cars: [],
};

const saveCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAV':
      return { ...initialState, cars: action.payload };
    default:
      return state;
  }
};

export default saveCarReducer;
