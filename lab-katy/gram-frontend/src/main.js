'use strict';

import './style/main.scss'
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import appStoreCreate from './lib/app-create-store.js';

let store = appStoreCreate();

let AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDom.render(<AppContainer />, document.getElementById('root'));