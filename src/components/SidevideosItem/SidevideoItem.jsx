import { useNavigate } from "react-router-dom";
import "./SidevideoItem.scss";

function SidevideosItem({ data }) {
  const navigate = useNavigate();

  const handleVideoCLick = () => {
    navigate(`/video/${data.id}`);
  };

  return (
    <div className="sidevideos-item" onClick={handleVideoCLick}>
      <div className="sidevideos-item__image">
        <img
          // change the route for images
          src={"http://localhost:3001" + data.image}
          className="sidevideos-item__image-img"
          alt="hero"
        />
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
