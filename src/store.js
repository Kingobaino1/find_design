import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import registrationReducer from './reducers/SignUp';
import loginReducer from './reducers/SignIn';
import designReducer from './reducers/DesignImages';

const reducers = combineReducers({
  designReducer,
  registrationReducer,
  loginReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
