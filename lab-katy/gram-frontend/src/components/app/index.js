'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Homepage from '../homepage';
import SettingsContainer from '../settings';
import DashboardContainer from '../dashboard-container';
import * as util from '../../lib/util.js';
import { tokenSet } from '../../actions/authentication-actions';
import { userProfileFetchRequest } from '../../actions/profile-actions';


class App extends React.Component {

  componentDidMount() {
    }
  

  render() {
    return (
      <section className='gram'>
          <BrowserRouter>
            <section>
              <Route path='/welcome/:authentication' component={Homepage} />
              <Route exact path='/settings' component={SettingsContainer} />
              <Route exact path='/dashboard' component={DashboardContainer} />
              {/* <Route exact path='/' component={DashboardContainer} /> */}
            </section>
          </BrowserRouter>
      </section>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);