import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Components/App';
import DesignPages from './Components/DesignPage';
import { Provider } from 'react-redux';
import store from './store';
import Registration from './Components/Registration';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DesignPages />
      <Registration />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
