import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import SignUp from './reducers/SignUp';
import designReducer from './reducers/DesignImages';

const reducers = combineReducers({
  designReducer,
  // SignUp,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
