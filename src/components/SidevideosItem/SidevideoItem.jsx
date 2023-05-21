import React, { useState } from "react";
import "./SidevideoItem.css";

function SidevideosItem(props) {
  const handleVideoCLick = () => {
    props.setCurrentVideo(props.data);
  };

// sidevideos-item
// sidevideos-item__image

  return (
    <div className="sidevideos-item" onClick={handleVideoCLick}>
      <div className="sidevideos-item__image">
        <img src={props.data.image} className="sidevideos-item__image-img" />
      </div>
      <div className="sidevideos-item__container">
        <div className="sidevideos-item__title">
          <h3>{props.data.title}</h3>
        </div>
        <div className="sidevideos-item__channel">
          <p>{props.data.channel}</p>
        </div>
      </div>
    </div>
  );
}

export default SidevideosItem;
