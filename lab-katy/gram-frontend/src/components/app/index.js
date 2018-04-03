'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import Homepage from '../homepage';

let store = appCreateStore();

class App extends React.Component {
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
                    </ul>
                  </nav>
              </header>
              <Route path='/welcome/:authentication' component={Homepage} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;