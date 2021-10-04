const initialState = {
  design: [],
  error: '',
}

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DESIGN':
      return { ...state, design: action.payload };
    case 'ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default designReducer;
