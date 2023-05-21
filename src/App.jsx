import "./App.css";
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import Comments from './components/Comments/Comments';
import Video from './components/Video/Video';
import Sidevideos from './components/Sidevideos/Sidevideos';
import data from "./data/video-details.json";


// TODO 
/**
  * use semantic tags where possible
  * 
  * + header 
  * 
  * + nav
  * 
  * + section
  * 
  * + main
  * 
  * + classNames fix
  * 
  * comment color change 
  * 
  * merge
  * 
  * public
  * 
  * packet zip
  * 
  * 
  * 
  **/

function App() {

  const [currentVideo, setCurrentVideo] = useState(data[0])
  const filteredVideos = data.filter((video) => video.id !== currentVideo.id)

  return (
    <div className="container">
      <Header/>
      <Hero currentVideo={currentVideo} />
      <main className="main-content">
        <div className="left">
          <Video currentVideo={currentVideo} />
          <Comments currentVideo={currentVideo} />
        </div>
        <Sidevideos videoData={filteredVideos} setCurrentVideo={setCurrentVideo} />
      </main>
    </div>
  );
}

export default App;
