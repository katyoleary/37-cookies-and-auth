'use strict';

import reducer from '../reducers';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import { createStore, applyMiddleware } from 'redux';

const appCreateStore = () => (
  createStore(reducer, applyMiddleware(thunk, reporter)) 
  //middlware is a chain. when our action is dispatched, it goes to thunk, reporter then reducer
)

export default appCreateStore;