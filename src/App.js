import logo from "./logo.svg";
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
      <main className="main">
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
        <div className="body">
          <div className="body__comments">
          
          </div>
          <div className="body__side-videos"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
