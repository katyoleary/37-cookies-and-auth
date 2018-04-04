'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import Homepage from '../homepage';
import SettingsContainer from '../settings';
import * as util from '../../lib/util.js';
import { tokenSet } from '../../actions/authentication-actions';

let store = appCreateStore();


class App extends React.Component {

  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if(token) {
      this.props.tokenSet(token);
    }
  }

  render() {
    return (
      <section className='gram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>gram</h1>
                  <nav>
                    <ul>
                      <li><Link to='/welcome/signup'>signup</Link></li>
                      <li><Link to='/welcome/login'>login</Link></li>
                      <li><Link to='/settings'>settings</Link></li>
                    </ul>
                  </nav>
              </header>
              <Route path='/welcome/:authentication' component={Homepage} />
              <Route exact path='/settings' component={SettingsContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;