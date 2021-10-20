const initialState = {
  cars: [],
};

const singleCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CAR':
      return { ...state, cars: action.payload };
    default:
      return state;
  }
};

export default singleCarReducer;
