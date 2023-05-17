
function SidevideosItem (props) {

  const handleVideoCLick = () => {
    props.setCurrentVideo(props.data)
  }

  return (
    <div className="sidevideos__item" onClick={handleVideoCLick} style={{backgroundColor: 'blue'}}>
      <div className="sidevideos__item-image"><img src={props.data.image} style={{width: 30, height: 20}}/></div>
      <div className="sidevideos__item-title"><h3>{props.data.title}</h3></div>
      <div className="sidevideos__item-channel"><p>{props.data.channel}</p></div>
    </div>
);
}

export default SidevideosItem;