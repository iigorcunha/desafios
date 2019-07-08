import React, { Component } from 'react';

import './style.css';

import FacebookLogo from '../../assets/facebookLogo.png';
import profileIcon from '../../assets/person.svg';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={FacebookLogo} alt="Facebook Logo" />
        <div id="profile">
          <a>
            Meu Perfil
            <img src={profileIcon} alt="Profile" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
