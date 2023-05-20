import "./App.css";
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import Comments from './components/Comments/Comments';
import Video from './components/Video/Video';
import Sidevideos from './components/Sidevideos/Sidevideos';
import data from "./data/video-details.json";


function App() {

  const [currentVideo, setCurrentVideo] = useState(data[0])
  const filteredVideos = data.filter((video) => video.id !== currentVideo.id)

  return (
    <div className="container">
      <Header/>
      <Hero currentVideo={currentVideo} />
      <div className="main-content">
        <aside className="left">
          <Video currentVideo={currentVideo} />
          <Comments currentVideo={currentVideo} />
        </aside>
        <Sidevideos videoData={filteredVideos} setCurrentVideo={setCurrentVideo} />
      </div>
    </div>
  );
}

export default App;
