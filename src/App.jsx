import "./App.css";
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments';
import Video from './components/Video/Video';
import Sidevideos from './components/Sidevideos/Sidevideos';
import data from "./data/video-details.json";


function App() {

  const [currentVideo, setCurrentVideo] = useState(data[0])

  return (
    <div className="container">
      <Header/>
      <Video currentVideo={currentVideo} />
      <Comments currentVideo={currentVideo} />
      <Sidevideos currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
    </div>
  );
}

export default App;
