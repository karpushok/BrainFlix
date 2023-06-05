import "./Upload.scss";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {uploadData} from '../../utils/utils'

function Upload() {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState( "" );
  const [inputPosterImage, setInputPosterImage] = useState('')
  const [inputPoster, setInputPoster] = useState( "" )
  const [hasTouchedForm, setHasTouchedForm] = useState([false, false]); // [input, description]

  const navigate = useNavigate();

  const formRef = useRef(null)

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

  const handleInputPoster = ( e ) => {
    console.log( `Upload.jsx - line: 33 ->> e`, e.target.accept )
    
    const form = new FormData( formRef.current );
    const fileReader = new FileReader();

    fileReader.readAsDataURL( form.get( 'file' ) );
    
    fileReader.addEventListener('load', () => {
      const base64Blob = fileReader.result;
      
      setInputPoster( e.target.value )
      setInputPosterImage(base64Blob)
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isValidForm =
      hasTouchedForm.every((el) => el === true) &&
      inputName &&
      inputDescription &&
      inputPoster;

    if ( isValidForm ) {
      
    const formData = new FormData(formRef.current);

      uploadData(formData).then(() => {
        navigate("/");
      })

    } else {
      setHasTouchedForm((prev) => [inputName.length === 0 || prev[0] !== false, inputDescription.length === 0 || prev[1] !== false]);
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
              src={inputPosterImage}
              alt="preview"
            />
          </div>
        </div>

        <form className="upload__form" onSubmit={handleFormSubmit} ref={formRef}>
          <div>
            <label htmlFor="file">Upload video</label>
            <input type="file" name="file" id="file" onChange={handleInputPoster} accept={"image/*"}/>
          </div>
          
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
              name="description"
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
