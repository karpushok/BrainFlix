import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments/Comments";
import Hero from "../components/Hero/Hero";
import Sidevideos from "../components/Sidevideos/Sidevideos";
import Video from "../components/Video/Video";

export const API_videos = "https://project-2-api.herokuapp.com/videos";

function MainLayout() {
  const { api_key } = JSON.parse(sessionStorage.getItem("apiKey"));

  const [videoData, setVideoData] = useState(null);
  const [videoMain, setVideoMain] = useState(null);

  const { videoId } = useParams();

  useEffect(() => {
    (async () => {
      const responseSideVideos = await axios.get(API_videos, {
        params: { api_key },
      });

      const idMain = responseSideVideos.data[0].id;

      const responseMainVideo = await axios.get(API_videos + `/${idMain}`, {
        params: { api_key },
      });

      setVideoData(responseSideVideos.data);
      setVideoMain(responseMainVideo.data);
    })();
    // no nneed for api_key as deps because it is a constant and doesn't change during session
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // [] deps array

  useEffect(() => {
    if (videoId && videoId !== videoMain?.id) {
      (async () => {
        const responseMainVideo = await axios.get(API_videos + `/${videoId}`, {
          params: { api_key },
        });

        setVideoMain(responseMainVideo.data);
      })();
    } else if (videoData && videoMain) {
      // place by default first video

      (async () => {
        const responseMainVideo = await axios.get(
          API_videos + `/${videoData[0].id}`,
          {
            params: { api_key },
          }
        );
        setVideoMain(responseMainVideo.data);
      })();
    }

    // no nneed for api_key as deps because it is a constant and doesn't change during session
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]); // mount // id

  if (!videoData || !videoMain) return null; // case no incoming data

  const filteredVideos = videoData.filter(
    (video) => video.id !== (videoId || videoData[0].id)
  );

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
