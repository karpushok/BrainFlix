import "./App.css";
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments';
import Video from './components/Video/Video';
import Sidevideos from './components/Sidevideos/Sidevideos';

function App() {
  return (
    <div className="container">
      <Header/>
      <Video/>
      <Comments/>
      <Sidevideos/>
    </div>
  );
}

export default App;
