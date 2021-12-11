import './VideoNav.scss';

function VideoNav({ videosData }) {

    console.log(videosData);

    return(
        <nav className="nav">
            <h2 className="nav__header">NEXT VIDEOS</h2>
            {videosData.map((video) => (
               <article className="nav__article">
                   <div className="nav__image-container">       
                        <img className="nav__video-image" src={video.image}></img>
                   </div>
                   <div className="nav__text-container">
                       <h2 className="nav__title">{video.title}</h2>
                       <p className="nav__channel">{video.channel}</p>
                   </div>
               </article> 
            )
            )}
        </nav>
    )
}

export default VideoNav;