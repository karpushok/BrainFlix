import SidevideosItem from "../SidevideosItem/SidevideoItem";
import "./Sidevideos.css";

function Sidevideos({ videoData }) {

  return (
    <div className="sidevideos">
      <h2 className="sidevideos__header">NEXT VIDEOS</h2>
      {videoData.map((video) => (
        <SidevideosItem
          data={video}
          key={video.id}
        />
      ))}
    </div>
  );
}
export default Sidevideos;
