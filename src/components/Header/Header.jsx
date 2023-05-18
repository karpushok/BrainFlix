import React, {useState} from 'react'
import "./Header.scss"

import logo from '../../assets/images/BrainFlix-logo.svg'
import avatar from "../../assets/images/Mohan-muruge.jpg"


function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo">
          <img src={logo} alt="logo" className="header__logo-image"/>
        </div>
        <div className="header__container">
          <div className="header__container-search">
            <input type="text" placeholder="Search" className="header__container-search-input"/>
          </div>
          <div className="header__container-profile">
            <img src={avatar} alt="Avatar" className="header__container-profile-image" />
          </div>
        </div>
        <button className="header__upload">UPLOAD</button>
        
      </div>
    </header>
  );
}

export default Header;
