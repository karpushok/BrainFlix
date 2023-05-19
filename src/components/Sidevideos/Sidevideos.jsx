import SidevideosItem from "../SidevideosItem/SidevideoItem";
// import data from "../../data/video-details.json";
import React, {useState} from 'react';
import "./Sidevideos.css";

// TODO
// filter out the main video from the data array using the filter method

function Sidevideos({videoData, setCurrentVideo }) {


    return (
    <div className="sidevideos">
        <h2 className="sidevideos__header">NEXT VIDEOS</h2>
            {videoData.map((video) => {
            return (
                <SidevideosItem data={video} key={video.id} setCurrentVideo={setCurrentVideo} />
            )
            })} 
    </div>
    );
}

export default Sidevideos;

