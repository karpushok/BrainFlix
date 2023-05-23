import Header from "../Header/Header";
import React, { useState } from "react";
import "./Upload.css";
import Preview from "../../assets/images/Upload-video-preview.jpg";

function Upload() {}

return (
  <section className="upload">
    <div className="upload__header">
      <h1 className="upload__header-text">Upload Video</h1>
    </div>
    <div className="upload__container">
      <div className="upload__hero">
        <div className="upload__subheader">
          <h2 className="upload__subheader-text">VIDEO THUMBNAIL</h2>
        </div>
        <div className="upload__preview">
          <img
            className="upload__preview-image"
            src={Preview}
            alt="preview-image"
          />
        </div>
      </div>
      <div className="upload__form">
        <div className="upload__subheader">
          <h2 className="upload__subheader-text">TITLE YOUR VIDEO</h2>
        </div>
        <div className="upload__name">
          <input
            type="text"
            id="title"
            name="name"
            class="upload__name-input"
            placeholder="Add a title of your video"
          />
        </div>
        <div className="upload__subheader">
          <h2 className="upload__subheader-text">ADD A VIDEO DESCRIPTION</h2>
        </div>
        <div className="upload__description">
          <textarea
            id="description"
            name="text"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
);
