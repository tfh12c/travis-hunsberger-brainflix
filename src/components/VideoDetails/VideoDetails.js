import './VideoDetails.scss';
import views from '../../assets/images/Icons/views.svg';
import likes from '../../assets/images/Icons/likes.svg';

function VideoDetails({ videoDetails }) {

    console.log(videoDetails);

    return (
        <section className="video-details">
            <h1 className="video-details__title">{videoDetails.title}</h1>
            <div className="video-details__metrics">
                <div className="video-details__channel-info">
                    <h3 className="video-details__channel">By {videoDetails.channel}</h3>
                    <span className="video-details__date">{videoDetails.timestamp}</span>
                </div>
                <div className="video-details__views-likes">
                    <span className="video-details__views">
                        <img className="video-details__views-icon" src={views} alt="views icon"/>{videoDetails.views}
                    </span>
                    <span className="video-details__likes">
                        <img className="video-details__likes-icon" src={likes} alt="views icon"/>{videoDetails.likes}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default VideoDetails;

 