import React, {useState} from 'react'
import "./Header.css"

import logo from '../../assets/images/BrainFlix-logo.svg'
import avatar from "../../assets/images/Mohan-muruge.jpg"


function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo">
        <a href="#"> 
          <img src={logo} alt="logo" className="header__logo-image"/>
        </a>  
        </div>
        <div className="header__container">
          <div className="header__search">
            <input type="text" placeholder="Search" className="header__search-input"/>
          </div>
          <div className="header__profile">
            <img src={avatar} alt="Avatar" className="header__profile-image" />
          </div>
        </div>
        <button className="header__upload">UPLOAD</button>
      </div>
    </header>
  );
}

export default Header;

// add correct link to logo image
