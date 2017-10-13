import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component{
  render(){
    return (
      <Popup {...this.props}>
        <img src="/img/kitty.png"></img>
        <h1>Login to Join The Community</h1>
        <p></p>
        <button className="facebook-btn">Login with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
