import "./App.css";


function App() {
  return (
    <div className="container">

      <header className="header">
        <div className="header__logo"></div>
        <div className="header__search"></div>
        <div className="header__upload"></div>
        <div className="header__profile"></div>
      </header>

      <div className="video">
        <div className="video__image"></div>
        <div className="video__title"></div>
        <div className="video__data">
          <div className="video__data-channel"></div>
          <div className="video__data-date"></div>
          <div className="video__data-views"></div>
          <div className="video__data-likes"></div>
        </div>
        <div className="video__description"></div>
      </div>  

      <div className="comments">
        <div className="comments__counter"></div>
        <div className="comments__input">
          <div className="comments__input-profile"></div>
          <h2 className="comments__input-header"></h2>
          <input className="comments__input-input"></input>
          <button className="comments__input-button"></button>
        </div>
        <div className="commentlist">
          <div className="commentlist__item">
            <div className="commentlist__item-profile"></div>
            <div className="commentlist__item-container">
              <div className="commentlist__item-container-header">
                <div className="commentlist__item-container-header-name"></div>
                <div className="commentlist__item-container-header-date"></div>
              </div>
              <div className="commentlist__item-paragraph"></div>
            </div>
          </div>
        </div>
      </div>    

      <div className="sidevideos">
        <h2 className="sidevideos__header"></h2>
        <div className="sidevideos__item">
          <div className="sidevideos__item-image"></div>
          <div className="sidevideos__item-title"></div>
          <div className="sidevideos__item-name"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
