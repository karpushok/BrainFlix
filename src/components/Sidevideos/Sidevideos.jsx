import SidevideosItem from "../SidevideosItem/SidevideoItem";
import data from "../../data/video-details.json";
import React, {useState} from 'react';
import "./Sidevideos.css";
import "../../styles/partials/_colors.scss";
import "../../styles/partials/_fonts.scss";

// TODO
// filter out the main video from the data array using the filter method

function Sidevideos(props) {

    return (
    <div className="sidevideos">
        <h2 className="sidevideos__header">NEXT VIDEOS</h2>
            {data.map((el) => {
            return (
                <SidevideosItem data={el} key={el.id} setCurrentVideo={props.setCurrentVideo} />
            )
            })} 
    </div>
    );
}

export default Sidevideos;

