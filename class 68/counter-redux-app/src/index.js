import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import myStore from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(

    <Provider store={myStore} >
      <App />
    </Provider>,
  document.getElementById('root')
);

