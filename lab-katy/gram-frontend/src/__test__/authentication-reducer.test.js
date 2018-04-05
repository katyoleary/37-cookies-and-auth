'use strict';

//easier than action test
import authReducer from '../reducers/authentication.js';
// import superagent from 'superagent';

describe('Authentication Reducer', () => {

  test('initial state should be null', () => {
    let result = authReducer(undefined, { type: null });
    expect(result).toEqual(null);
  });

  test('the state should be returned if no action type is presented', () => {
    let state = { username: 'testusername', email: 'testuser@email.net', password: '123456789' };
    let result = authReducer(state, { type: null });
    expect(result).toEqual(state);
  });

  //one more test for token set (look at first test and test for type)
});
//cookies are same thing as local storage but has extra meta information attached to it


