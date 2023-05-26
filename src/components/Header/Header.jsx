import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  const navigate = useNavigate();

  const handleClickUpload = () => {
    navigate("/upload");
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" className="header__logo-image" />
          </Link>
        </div>
        <div className="header__container">
          <div className="header__search">
            <input
              type="text"
              placeholder="Search"
              className="header__search-input"
            />
          </div>
          <div className="header__profile">
            <img src={avatar} alt="Avatar" className="header__profile-image" />
          </div>
        </div>
        <button className="header__upload" onClick={handleClickUpload}>
          UPLOAD
        </button>
      </div>
    </header>
  );
}

export default Header;

// add correct link to logo image
