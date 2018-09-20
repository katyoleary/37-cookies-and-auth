'use strict';

import { tokenSet, tokenDelete, signupRequest, loginRequest } from '../actions/authentication-actions.js';
//token delete deletes token from cookie (well call this logout tmr)
import superagent from 'superagent';

const randomNum = max => {
  return Math.floor(Math.random() * max);
}
//this is for creating a mock user. we usually wouldn't do this but would need to write logout functions first

const mockUser = {
  username: `testingit${randomNum(1000)}`, 
  email: `testingit${randomNum(1000)}@email.net`, 
  password: '123456789'
}

describe('Auth Actions', () => {
  let tempUser;
  
  test('tokenSet should return a TOKEN_SET action', () => {
    let action = tokenSet({ token: '12345' });
    expect(action.type).toEqual('TOKEN_SET');
    expect(action.payload).toBeTruthy();
    expect(action.payload.token).toEqual('12345');
  });

  test('tokenDelete should return a tokenDelete action', () => {
    let token = '12345';
    let action = tokenDelete(token);
    expect(action).toEqual({ 
      type: 'TOKEN_DELETE'
    });
  });

  //now dealing with async action creators, so were passing done

  test('signupRequest should return a token', done => {
    superagent.post('http://localhost:3000/signup') //this action uses api url 
    .send(mockUser)
    .end((err, res) => { //err first because node is error first
      if(err) return done(err);
      expect(res.text).toBeTruthy();
      expect(typeof res.text).toEqual('string');
      expect(err).toEqual(null);
      tempUser = mockUser;
      console.log('signup:::', tempUser);
      done();
    });
  });

  test('loginRequest should return a token', done => {
    superagent.get(`http://localhost:3000/login`)
    .auth(tempUser.username, tempUser.password) //base64 encoded thing
    .end((err, res) => {
      if(err) return done(err);
      expect(res.text).toBeTruthy();
      expect(typeof res.text).toEqual('string');
      expect(err).toEqual(null);
      console.log('login:::', tempUser);
      done();
    });
  });
});



