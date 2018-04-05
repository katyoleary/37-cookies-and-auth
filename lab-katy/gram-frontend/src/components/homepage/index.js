'use strict';

import React from 'react';
import { connect } from 'react-redux'; //connect method itself curried function
import AuthenticationForm from '../authentication-form';
import * as util from '../../lib/util.js';
import { signupRequest, loginRequest } from '../../actions/authentication-actions.js';
import { Link, Redirect } from 'react-router-dom';
import { userProfileFetchRequest } from '../../actions/profile-actions.js';


class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  componentWillReceiveProps(props) {
    if(props.auth && props.userProfile) {
      props.history.replace('/dashboard')
    }

    if(props.auth && !props.userProfile) {
      props.history.replace('/settings')
    }
  };

  handleLogin(user) {
    let { profileFetch, history } = this.props;
    return this.props.login(user)
    .then( () => profileFetch())
    .then( () => history.push('/dashboard'))
    .catch(util.logError);
  };

  handleSignup(user) {
    return this.props.signup(user)
    .then( () => {
      this.props.history.push('/settings')
    })
    .catch(util.logError);
  };

  render() {
    let { params } = this.props.match;
    //params is a prop on match object

    let handleComplete = params.authentication === 'login' ? this.props.login : this.props.signup;
    //authentication coming from our route. im app <Route path='welcome/:authentication'>

    return (
      <section className='homepage'>
        <AuthenticationForm authentication={params.authentication} onComplete={handleComplete} />

        <div className='auth-nav'>
          {util.renderIf(params.authentication === 'login', 
          <Link to='/welcome/signup'>signup</Link>)}

          {util.renderIf(params.authentication === 'signup', 
            <Link to='/welcome/login'>login</Link>)}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.props,
  userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signupRequest(user)), 
    login: user => dispatch(loginRequest(user)),
    profileFetch: () => dispatch(userProfileFetchRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);