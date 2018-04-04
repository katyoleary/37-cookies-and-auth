'use strict';

import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../profile-form';
import { profileCreateRequest } from '../../actions/profile-actions';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleProfileCreate(profile) {
    return this.props.profileCreate(profile)
    .then( res => {
      console.log('profile created: ', res);
    })
    .catch(console.error);
  }

  handleProfileUpdate(profile) {
    //TODO
  }

  render() {
    this.handleComplete = this.props.profile ? this.handleProfileCreate : this.handleProfileUpdate;

    return (
      <section className='settings-container'>
        <h2>profile settings</h2>
        <ProfileForm  
          buttonText='create profile'
          onComplete={this.handleProfileCreate} />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(profileCreateRequest(profile)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);