import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunks';
import SignUp from './src/reducers/SignUp';

const store = createStore(SignUp, applyMiddleware(thunk));

export default store;
