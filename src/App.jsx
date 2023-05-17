import "./App.css";

import React, {useState} from 'react'

import Header from './components/Header/Header';
import Comments from './components/Comments/Comments';
import Video from './components/Video/Video';
import Sidevideos from './components/Sidevideos/Sidevideos';



import data from "./data/video-details.json";

//TODO 
/**
  * 
  * 
  * Context  value=[video, setVideo]
  *   App
  *       Video => Context video video - data
  *        Comments => Context video commnet
  * 
  * 
  * 
  * Context
  * 
  **/


function App() {

  const [currentVideo, setCurrentVideo] = useState(data[0])

  console.log(`App.jsx - line: 32 ->> currentVideo`, currentVideo)

  // Context
  // Lift State (props drillind)

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
