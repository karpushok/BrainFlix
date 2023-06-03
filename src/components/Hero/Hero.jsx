import "./Hero.scss";
import React from "react";

function Hero({ currentVideo }) {
  return (
    <div className="hero">
      <div className="hero__image">
        <video
          controls //add video controls
          // autoPlay
          loop
          id=""
          className="hero__image-object"
          poster={'http://localhost:3001'+currentVideo.image}
        >
          <source src={`${currentVideo.video}?api_key=test`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
