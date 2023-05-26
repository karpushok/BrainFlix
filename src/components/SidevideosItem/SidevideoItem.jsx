import React from "react";
import { useNavigate, useParams} from "react-router-dom";

import "./SidevideoItem.css";

function SidevideosItem({setCurrentVideo, data}) {
  const navigate = useNavigate()
  const { videoId } = useParams()
  
  const handleVideoCLick = () => {
    setCurrentVideo(videoId);
    navigate(`/video/${data.id}`)
  };
  

  return (
    <div className="sidevideos-item" onClick={handleVideoCLick}>
      <div className="sidevideos-item__image">
        <img src={data.image} className="sidevideos-item__image-img" alt="hero"/>
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
