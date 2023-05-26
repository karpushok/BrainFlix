import SidevideosItem from "../SidevideosItem/SidevideoItem";
import React from "react";
import "./Sidevideos.css";

function Sidevideos({ videoData, setCurrentVideo }) {
  return (
    <div className="sidevideos">
      <h2 className="sidevideos__header">NEXT VIDEOS</h2>{" "}
      {videoData.map((video) => {
        return (
          <SidevideosItem
            data={video}
            key={video.id}
            setCurrentVideo={setCurrentVideo}
          />
        );
      })}
    </div>
  );
}
export default Sidevideos;

/* For each video, the SidevideosItem component is rendered with the following props:
- data prop is set to the current video object.
- key prop is set to the unique identifier of the video.
- setCurrentVideo prop is passed to handle the action of setting the current video.*/
