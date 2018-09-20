'use strict';

import superagent from 'superagent';

export const tokenSet = token => ({
  type: 'TOKEN_SET', 
  payload: token,
})

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE',
  //put more here when we need it
})

export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
  .withCredentials()
  .send(user)
  .then( res => {
    dispatch(tokenSet(res.text))
    try {
      localStorage.token = res.text;
    } catch(err) {
      console.error(err);
    }
    return res;
  })
}

export const loginRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
  .withCredentials()
  .auth(user.username, user.password)
  .then( res => {
    dispatch(tokenSet(res.text))
    return;
  })
}