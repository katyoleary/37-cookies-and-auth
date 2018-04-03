'use strict';

export default store => next => action => (
  typeof action === 'function'
  ? action(store.dispatch, store.getState)
  : next(action)
)

//before actions were just object with type and payload. now action is a function that will be manipulating the actoin and dispatching the action