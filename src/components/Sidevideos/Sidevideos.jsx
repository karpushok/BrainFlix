import SidevideosItem from "../SidevideosItem/SidevideoItem";
import data from "../../data/video-details.json";

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
