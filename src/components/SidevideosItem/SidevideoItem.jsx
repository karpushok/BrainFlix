import React, {useState} from 'react';
import "./SidevideoItem.css";
import "../../styles/partials/_colors.scss";
import "../../styles/partials/_fonts.scss";


function SidevideosItem (props) {

  const handleVideoCLick = () => {
    props.setCurrentVideo(props.data)
  }

  return (
    <div className="sidevideos__item" onClick={handleVideoCLick}>
      <div className="sidevideos__item-image">
        <img src={props.data.image} className='sidevideos__item-image-img'/>
      </div>
      <div className='sidevideos__item-container'>
        <div className="sidevideos__item-container-title"><h3>{props.data.title}</h3></div>
        <div className="sidevideos__item-container-channel"><p>{props.data.channel}</p></div>
      </div>
    </div>
);
}

export default SidevideosItem;