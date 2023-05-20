import "./Hero.css";
import React, { useState } from "react";

function Hero ({ currentVideo }) {

  return (
    <div className="hero">
      <div className="hero__image">
        <video
          controls //add video controls
          autoPlay
          loop
          id=""
          className="hero__image-object"
          poster={currentVideo.image}
        >
        <source src={currentVideo.video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
