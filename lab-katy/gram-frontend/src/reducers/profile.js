'use strict';

export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {

    case 'PROFILE_CREATE':
      return payload;

    case 'PROFILE_UPDATE':
      return{...state, ...payload} //payload needs spread bc were only updating certain parts of the payload

    case 'LOGOUT':
      return null;
    
    default:
      return state;
  }
}