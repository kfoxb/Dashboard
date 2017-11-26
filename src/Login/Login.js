import React from 'react';
import google_signin from './google_signin.png';

export default class Login extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={google_signin} style={{ maxWidth: '50%' }}/>
      </div>
    );
  }
}
