import './VideoNav.scss';
import { Link } from 'react-router-dom';

function VideoNav({ videos }) {

    return(
        <nav className="video-nav">
            <h2 className="video-nav__header">NEXT VIDEOS</h2>
            {videos.map((video) => (
                <Link key={video.id} className="video-nav__link" to={"/" + video.id}>    
                <article className="video-nav__article">
                    <div className="video-nav__image-container">       
                            <img className="video-nav__video-image" src={video.image} alt="video thumbnail"></img>
                    </div>
                    <div className="video-nav__text-container">
                        <h2 className="video-nav__title">{video.title}</h2>
                        <p className="video-nav__channel">{video.channel}</p>
                    </div>
                </article> 
               </Link>
            )
            )}
        </nav>
    );
}

export default VideoNav;