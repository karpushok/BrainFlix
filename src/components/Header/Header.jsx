import React, {useState} from 'react'
import "./Header.scss"

import logo from '../../assets/images/BrainFlix-logo.svg'
import avatar from "../../assets/images/Mohan-muruge.jpg"


function Header() {
  return (
    <header className="header">
      <div className="wrapper"> {/* div is used to wrap the header content*/}
        <div className="header__logo">
          <img src={logo} alt="logo" className="header__logo-image"/> {/* Render logo image */}
        </div>
        <div className="header__container">
          <div className="header__search">
            <input type="text" placeholder="Search" className="header__search-input"/> {/* Search input field */}
          </div>
          <div className="header__profile">
            <img src={avatar} alt="Avatar" className="header__profile-image" /> {/* Render avatar image */}
          </div>
        </div>
        <button className="header__upload">UPLOAD</button> {/* Upload button */}
      </div>
    </header>
  );
}

export default Header; //the component is exported as the default export, making it available for use in other components
