import React from "react";
import "./Upload.css";
import Preview from "../../assets/images/Upload-video-preview.jpg";

function Upload() {
  return (
    <section className="upload">
      <div className="upload__header">
        <h1 className="upload__header-text">Upload Video</h1>
      </div>
      <div className="upload__container">
        <div className="upload__hero">
          <div className="upload__subheader">
            <label className="upload__subheader-text">VIDEO THUMBNAIL</label>
          </div>
          <div className="upload__preview">
            <img
              className="upload__preview-image"
              src={Preview}
              alt="preview-image"
            />
          </div>
        </div>

        <form className="upload__form">
          <div className="upload__subheader">
            <label className="upload__subheader-text" for="title">
              TITLE YOUR VIDEO
            </label>
          </div>
          <div className="upload__name">
            <input
              type="text"
              id="title"
              name="name"
              className="upload__name-input"
              placeholder="Add a title of your video"
            />
          </div>
          <div className="upload__subheader">
            <label className="upload__subheader-text" for="description">
              ADD A VIDEO DESCRIPTION
            </label>
          </div>
          <div className="upload__description">
            <textarea
              id="description"
              type="text"
              name="text"
              className="upload__description-input"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="upload__button">
        <button className={"upload__button-input"} type="submit">
          PUBLISH
        </button>
        <a href="#" className="upload__cancel">
          CANCEL
        </a>
      </div>
    </section>
  );
}
export default Upload;
