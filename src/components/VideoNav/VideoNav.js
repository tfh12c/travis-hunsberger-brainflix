import './VideoNav.scss';
import { Link } from 'react-router-dom';

function VideoNav({ videos }) {

    //console.log(videos);

    return(
        <nav className="nav">
            <h2 className="nav__header">NEXT VIDEOS</h2>
            {videos.map((video) => (
                <Link key={video.id} className="nav__link" to={"/" + video.id}>    
                <article className="nav__article">
                    <div className="nav__image-container">       
                            <img className="nav__video-image" src={video.image} alt="video thumbnail"></img>
                    </div>
                    <div className="nav__text-container">
                        <h2 className="nav__title">{video.title}</h2>
                        <p className="nav__channel">{video.channel}</p>
                    </div>
                </article> 
               </Link>
            )
            )}
        </nav>
    );
}

export default VideoNav;