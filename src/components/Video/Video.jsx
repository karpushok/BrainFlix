import "./Video.scss";
import React from "react";

import likesImage from "../../assets/icons/likes.svg";
import viewsImage from "../../assets/icons/views.svg";
import { transformDateAgo } from "../../utils/utils";

function Video({ currentVideo }) {
  const { title, channel, timestamp, views, likes, description } = currentVideo;

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
              className="video__data-likes-image"
              alt="likes"
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
