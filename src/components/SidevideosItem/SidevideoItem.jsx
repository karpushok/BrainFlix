import React, { useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

import "./SidevideoItem.css";

function SidevideosItem({setCurrentVideo, data}) {
  const navigate = useNavigate()
  const params = useParams()
  
  const handleVideoCLick = () => {
    setCurrentVideo(data);
    navigate(`/video/${data.id}`)
  };
  
  console.log(`SidevideoItem.jsx - line: 15 ->> params`, params )
// sidevideos-item
// sidevideos-item__image

  return (
    <div className="sidevideos-item" onClick={handleVideoCLick}>
      <div className="sidevideos-item__image">
        <img src={data.image} className="sidevideos-item__image-img" />
      </div>
      <div className="sidevideos-item__container">
        <div className="sidevideos-item__title">
          <h3>{data.title}</h3>
        </div>
        <div className="sidevideos-item__channel">
          <p>{data.channel}</p>
        </div>
      </div>
    </div>
  );
}

export default SidevideosItem;
