import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Comments from "../components/Comments/Comments";
import Hero from "../components/Hero/Hero";
import Sidevideos from "../components/Sidevideos/Sidevideos";
import Video from "../components/Video/Video";
import {getData} from '../utils/utils';

function MainLayout() {
  const [videoData, setVideoData] = useState(null);
  const [videoMain, setVideoMain] = useState(null);

  const { videoId } = useParams();

  useEffect( () => {
    
    if(!videoId) {
        getData().then( responseSideVideos => {
          getData( `/${responseSideVideos[0].id }` ).then( responseMainVideo => {
            setVideoData( responseSideVideos );
            setVideoMain( responseMainVideo );
          })
        })

    } else if ( videoId && ( videoId !== videoMain?.id ) ) {
      // when clicked on sidevideos 
      getData().then( responseSideVideos => {
        getData( `/${videoId}` ).then( responseMainVideo => {
          setVideoData( responseSideVideos );
          setVideoMain( responseMainVideo );
        })
      })
    } 
    // no need for api_key as deps because it is a constant and doesn't change during session
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]); // [] deps array

  if (!videoData || !videoMain) return null; // case no incoming data

  const filteredVideos = videoData.filter((video) => video.id !== (videoId || videoData[0].id));

  // console.log(`MainLayout.jsx - line: 42 ->> videoMain`, videoMain)
  // console.log(`MainLayout.jsx - line: 42 ->> filteredVideos`, filteredVideos)

  return (
    <>
      <Hero currentVideo={videoMain} />
      <main className="main-content">
        <div className="left">
          <Video currentVideo={videoMain} />
          <Comments currentVideo={videoMain} />
        </div>
        <Sidevideos videoData={filteredVideos} />
      </main>
    </>
  );
}
export default MainLayout;
