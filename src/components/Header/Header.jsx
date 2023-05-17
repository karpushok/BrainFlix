function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo"></div>
        <div className="header__search">
          <input type="text" placeholder="Search" />
        </div>
        <button className="header__upload">UPLOAD</button>
        <div className="header__profile">
          <img src="" alt="Avatar" className="header__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
