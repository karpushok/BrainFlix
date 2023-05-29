import "./Upload.scss";
import Preview from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [hasTouchedForm, setHasTouchedForm] = useState([false, false]); // [input, description]

  const navigate = useNavigate();

  const handleInputName = (event) => {
    setInputName(event.target.value);
    setHasTouchedForm((prev) => [true, prev[1]]);
  };

  const handleInputDescription = (event) => {
    setInputDescription(event.target.value);
    setHasTouchedForm((prev) => [prev[0], true]);
  };

  const handleCancelClick = () => {
    setInputName("");
    setInputDescription("");
    setHasTouchedForm([false, false]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isValidForm =
      hasTouchedForm.every((el) => el === true) &&
      inputName &&
      inputDescription;

    if (isValidForm) {
      navigate("/");
    } else {
      setHasTouchedForm([
        inputName.length === 0,
        inputDescription.length === 0, //check this status
      ]);
    }
  };

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
              alt="preview"
            />
          </div>
        </div>

        <form className="upload__form" onSubmit={handleFormSubmit}>
          <div className="upload__subheader">
            <label className="upload__subheader-text" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
          </div>
          <div className="upload__name">
            <input
              type="text"
              id="title"
              name="name"
              className={
                hasTouchedForm[0] && !inputName
                  ? "upload__name-input upload__name-input--error"
                  : "upload__name-input"
              }
              placeholder="Add a title of your video"
              value={inputName}
              onChange={handleInputName}
            />
          </div>
          <div className="upload__subheader">
            <label className="upload__subheader-text" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
          </div>
          <div className="upload__description">
            <textarea
              id="description"
              type="text"
              name="text"
              className={
                hasTouchedForm[1] && !inputDescription
                  ? "upload__description-input upload__description-input--error"
                  : "upload__description-input"
              }
              placeholder="Add a description to your video"
              value={inputDescription}
              onChange={handleInputDescription}
            />
          </div>
          <div className="upload__button">
            <button className={"upload__button-input"} type="submit">
              PUBLISH
            </button>
            <button
              className="upload__cancel"
              onClick={handleCancelClick}
              type="button"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Upload;
