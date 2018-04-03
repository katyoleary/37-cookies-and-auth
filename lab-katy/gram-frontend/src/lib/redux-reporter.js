'use strict';

const reporter = store => next => action => {
  console.log('ACTION IN REDUX REPORTER', action);
  try {
    let result = next(action);
    console.log('STATE IN REDUX REPORTER', store.getState());
    return result;
  } catch (err) {
    err.action = action;
    console.error('ERROR IN REDUX REPORTER', error);
    return error;
  }
}

export default reporter;