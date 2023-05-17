import "./Video.css";
import "../../styles/partials/_colors.scss"
import "../../styles/partials/_fonts.scss"
import React, {useState} from 'react'


function Video({ currentVideo }) {
  return (
    <div className="video">
      <div className="video__image">
        <img src={currentVideo.image} alt="hero" className="video__image-object"/>
      </div>
      <div className="video__title"><h1>{currentVideo.title}</h1></div>
      <div className="video__data">
        <div className="video__data-container">
          <div className="video__data-container-channel"><h3>{currentVideo.channel}</h3></div>
          <div className="video__data-container-date"><h4>{currentVideo.date}</h4></div>
        </div>
        <div className="video__data-container">
          <div className="video__data-container-views">
            <img src="../../assets/icons/views.svg" className="video__data-container-views-image"/>
            <h4>{currentVideo.views}</h4>
          </div>
          <div className="video__data-container-likes">
          <img src="../../assets/icons/likes.svg" className="video__data-container-likes-image"/>
            <h4>{currentVideo.likes}</h4>
          </div> 
        </div>
        
      </div>
      <div className="video__description"><p>{currentVideo.description}</p></div>
    </div>
  );
}

export default Video;
