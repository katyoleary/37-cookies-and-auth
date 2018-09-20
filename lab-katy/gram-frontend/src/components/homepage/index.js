'use strict';

import React from 'react';
import { connect } from 'react-redux'; //connect method itself curried function
import AuthenticationForm from '../authentication-form';
import * as util from '../../lib/util.js';
import { signupRequest, loginRequest } from '../../actions/authentication-actions.js';


class Homepage extends React.Component {
  render() {
    let { params } = this.props.match;
    //params is a prop on match object

    let handleComplete = params.authentication === 'login' ? this.props.login : this.props.signup;
    //authentication coming from our route. im app <Route path='welcome/:authentication'>

    return (
      <section>
        <AuthenticationForm authentication={params.authentication} onComplete={handleComplete} />
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signupRequest(user)), 
    login: user => dispatch(loginRequest(user)),
  }
}

export default connect(null, mapDispatchToProps)(Homepage);