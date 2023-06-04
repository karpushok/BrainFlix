import "./Video.scss";
import React, {useState, useEffect} from "react";

import likesImage from "../../assets/icons/likes.svg";
import viewsImage from "../../assets/icons/views.svg";
import { transformDateAgo, putData } from "../../utils/utils";

function Video({ currentVideo }) {
  
  const [like, setLike] = useState(false)
  const [currentVideoState, setCurrentVideoState] = useState(currentVideo)
  
  const { title, channel, timestamp, views, likes, description, id } = currentVideoState;

  const handleClickLike = () => {
    putData(id).then((data) => {
      setLike(true)
      setCurrentVideoState(data)
    })
  }

  useEffect(() => {
    setLike(false)
    setCurrentVideoState(currentVideo)
  },[currentVideo.title])

  return (
    <section className="video">
      <div className="video__title">
        <h1>{title}</h1>
      </div>

      <div className="video__data">
        <div className="video__data-container">
          <div className="video__data-channel">
            <h3>By {channel}</h3>
          </div>
          <div className="video__data-date">
            <h4 className="video__data-date-output">
              {transformDateAgo(timestamp)}
            </h4>
          </div>
        </div>
        <div className="video__data-container">
          <div className="video__data-views">
            <img
              src={viewsImage}
              className="video__data-views-image"
              alt="views"
            />
            <h4>{views}</h4>
          </div>
          <div className="video__data-likes">
            <img
              src={likesImage}
              className={like ? "video__data-likes-image video__data-likes-image--liked" : "video__data-likes-image"}
              alt="likes"
              onClick={handleClickLike} 
            />
            <h4>{likes}</h4>
          </div>
        </div>
      </div>
      <div className="video__description">
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Video;
