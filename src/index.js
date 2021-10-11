import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';
import Registration from './Components/Registration';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Registration />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
