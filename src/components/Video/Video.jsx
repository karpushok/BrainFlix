import "./Video.css";
import React, { useState } from "react";

import likesImage from "../../assets/icons/likes.svg";
import viewsImage from "../../assets/icons/views.svg";
import { getDate, transformDateAgo } from "../../utils/utils";


function Video({ currentVideo }) {
  const { title, channel, timestamp, views, likes, description } = currentVideo;

  return (
    <div className="video">
      <div className="video__title">
        <h1>{title}</h1>
      </div>

      <div className="video__data">
        <div className="video__data-container">
          <div className="video__data-container-channel">
            <h3>By {channel}</h3>
          </div>
          <div className="video__data-container-date">
            <h4 className="video__data-container-date-output">
              {/* {getDate(timestamp)} */}
              {transformDateAgo(timestamp)}
            </h4>
          </div>
        </div>
        <div className="video__data-container">
          <div className="video__data-container-views">
            <img
              src={viewsImage}
              className="video__data-container-views-image"
            />
            <h4>{views}</h4>
          </div>
          <div className="video__data-container-likes">
            <img
              src={likesImage}
              className="video__data-container-likes-image"
            />
            <h4>{likes}</h4>
          </div>
        </div>
      </div>
      <div className="video__description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Video;
