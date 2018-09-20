'use strict';

import superagent from 'superagent';

export const profileCreate = profile => ({
  type: 'PROFILE_CREATE', 
  payload: profile
});

export const profileUpdate = profile => ({
  type: 'PROFILE_UPDATE', 
  payload: profile
});

//this is a curried function and an async action creator. delayed execution of your dispatched action

export const profileCreateRequest = profile => (dispatch, getState) => {
  let { authentication } = getState();

  return superagent.post(`${__API_URL__}/profiles`)
  .set('Authorization', `Bearer ${authentication}`)
  .field('bio', profile.bio)
  .attach('avatar', profile.avatar)
  .then( res => {
    dispatch(profileCreate(res.body));
    return res;
  })
}