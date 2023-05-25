import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comments from "./components/Comments/Comments";
import Video from "./components/Video/Video";
import Sidevideos from "./components/Sidevideos/Sidevideos";
import data from "./data/video-details.json";
import UploadPage from "./pages/Upload/UploadPage";



const dataOld = 
{
  "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
  "title": "BMX Rampage: 2021 Highlights",
  "channel": "Red Cow",
  "image": "https://i.imgur.com/l2Xfgpl.jpg",
  "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  "views": "1,001,023",
  "likes": "110,985",
  "duration": "4:01",
  "video": "https://project-2-api.herokuapp.com/stream",
  "timestamp": 1626032763000,
  "comments": [
    {
      "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
      "name": "Micheal Lyons",
      "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
      "likes": 0,
      "timestamp": 1628522461000
    },
    {
      "id": "091de676-61af-4ee6-90de-3a7a53af7521",
      "name": "Gary Wong",
      "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      "likes": 0,
      "timestamp": 1626359541000
    },
    {
      "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
      "name": "Theodore Duncan",
      "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
      "likes": 0,
      "timestamp": 1626011132000
    }
  ]
}


const dataNew = [
  {
  "id": "1af0jruup5gu",
  "title": "BMX Rampage: 2018 Highlights",
  "channel": "Red Cow",
  "image": "https://i.imgur.com/l2Xfgpl.jpg" 
  },
  {
  "id": "1ainjruutd1j",
  "title": "Become A Travel Pro In One Easy Lesson",
  "channel": "Todd Welch",
  "image": "https://i.imgur.com/5qyCZrD.jpg"
  }
]


//TODO
/**
 *

 *
 * after upload > notify and redirect to home
 *
 *
 * Extra:
 *
 * refactor styles
 *
 * fix BEM Comments condition
 *
 * 
 * API
 * 
 * store key in global variable > context ? // react router ?
 * 
 * context ??
 * 
 * router - save key and pass ??
 * 
 * 
 * sidevideoItem.scss remove unnecessary containers? 
 * 
 * 
 * default videos
 * 
 **/

const API_videos = 'https://project-2-api.herokuapp.com/videos'

function App() {
  
  //TODO 
  /**
    *  sideVideos > 1 id
    * 
    *   id >  /videos/:id
    *       
    *     Hero
    * 
    **/

    
  const [videoData, setVideoData] = useState([]);
  const [videoMain, setVideoMain] = useState([])
  const [currentVideo, setCurrentVideo] = useState({})

  const params = useParams()

  console.log(`App.jsx - line: 118 ->> params`, params)

  useEffect(() => {
  
    (async () => {

      const responseSideVideos = await axios.get(API_videos, {params: {api_key: '4a2fe7e7-839c-4200-97f2-e8184d411ec7'}})
      
      const idMain = responseSideVideos.data[0].id

      console.log(`App.jsx - line: 124 ->> idMain`, idMain)
      const responseMainVideo = await axios.get(API_videos + `/${idMain}`, { params: { api_key: '4a2fe7e7-839c-4200-97f2-e8184d411ec7' } })

      setCurrentVideo(responseSideVideos.data[0])
      setVideoData(responseSideVideos.data)
      setVideoMain(responseMainVideo.data)

    })() // IIFE

  }, []) // [] deps array


  useEffect(() => {
    
    if(currentVideo.id && (currentVideo.id !== videoMain.id)) {
      
      (async () => {
        const idMain = currentVideo.id
        const responseMainVideo = await axios.get(API_videos + `/${idMain}`, { params: { api_key: '4a2fe7e7-839c-4200-97f2-e8184d411ec7' } })

        setVideoMain(responseMainVideo.data)
      })()

    } else {
      return
    }
      
  }, [currentVideo.id]) // mount // id
  
  if(videoData.length === 0 || videoMain.length === 0) return null

  console.log(`App.jsx - line: 154 ->> currentVideo`, currentVideo.id)
  
  const filteredVideos = videoData.filter((video) => video.id !== currentVideo.id);

  console.log(`App.jsx - line: 156 ->> filteredVideos`, filteredVideos)

  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={
              <>
                <Hero currentVideo={videoMain} />
                <main className="main-content">
                  <div className="left">
                    <Video currentVideo={videoMain} />
                    <Comments currentVideo={videoMain} />
                  </div>
                  <Sidevideos
                    videoData={filteredVideos}
                    setCurrentVideo={setCurrentVideo}
                  />
                </main>
              </>
            }
          />
          <Route path="/video/:videoId" element={
              <>
                <Hero currentVideo={videoMain} />
                <main className="main-content">
                  <div className="left">
                    <Video currentVideo={videoMain} />
                    <Comments currentVideo={videoMain} />
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
