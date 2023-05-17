function Video({ currentVideo }) {
  return (
    <div className="video">
      <div className="video__image">
        <img src={currentVideo.image} alt="" />
      </div>
      <div className="video__title"><h1>{currentVideo.title}</h1></div>
      <div className="video__data">
        <div className="video__data-channel"><h3>{currentVideo.channel}</h3></div>
        <div className="video__data-date"></div>
        <div className="video__data-views"></div>
        <div className="video__data-likes"></div>
      </div>
      <div className="video__description"></div>
    </div>
  );
}

export default Video;
