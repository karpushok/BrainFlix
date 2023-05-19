import "./App.css";
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments';
import Video from './components/Video/Video';
import Sidevideos from './components/Sidevideos/Sidevideos';
import data from "./data/video-details.json";


function App() {

  const [currentVideo, setCurrentVideo] = useState(data[0])

// all data App.jsx
  
  // => Sidevideos all data

  //  [].filter((el)=> el.id !== currentVideo.id)

  const filteredVideos = data.filter((video) => video.id !== currentVideo.id)


  return (
    <div className="container">
      <Header/>
      <Video currentVideo={currentVideo} />
      <Comments currentVideo={currentVideo} />
      <Sidevideos videoData={filteredVideos} setCurrentVideo={setCurrentVideo} />
    </div>
  );
}

export default App;
