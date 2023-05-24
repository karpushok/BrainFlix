import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comments from "./components/Comments/Comments";
import Video from "./components/Video/Video";
import Sidevideos from "./components/Sidevideos/Sidevideos";
import data from "./data/video-details.json";
import UploadPage from "./pages/Upload/UploadPage";

//TODO
/**
 *
 * home / videoPage
 *
 * video upload HomePage
 *
 *
 * after upload > notify and redirect to home
 *
 *
 *
 * Extra:
 *
 * refactor styles
 *
 * fix BEM Comments condition
 *
 *
 **/

function App() {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  const filteredVideos = data.filter((video) => video.id !== currentVideo.id);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={
              <>
                <Hero currentVideo={currentVideo} />
                <main className="main-content">
                  <div className="left">
                    <Video currentVideo={currentVideo} />
                    <Comments currentVideo={currentVideo} />
                  </div>
                  <Sidevideos
                    videoData={filteredVideos}
                    setCurrentVideo={setCurrentVideo}
                  />
                </main>
              </>
            }
          />
          <Route path="/upload" element={<UploadPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
