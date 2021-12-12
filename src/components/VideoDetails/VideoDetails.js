import './VideoDetails.scss';
import views from '../../assets/images/Icons/views.svg';
import likes from '../../assets/images/Icons/likes.svg';

function VideoDetails({ videoDetails }) {

    console.log(videoDetails.comments);

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
            <p className="video-details__description">{videoDetails.description}</p>

            {/* start of comments section, make into child */}
            {/* find a way to make this into a function to pull length of comments array */}
            <h3 className="video-details__comments-length">3 Comments</h3>
            <div className="video-details__comments-form"> 

                {/* <!-- Avatar Image --> */}
                <img src="" alt="avatar" className="video-details__comments-avatar"></img>

                <div className="video-details__form-text-container"> 
                    {/* <!-- Comment Input --> */}
                    <label className="video-details__form-label" for="comment">JOIN THE CONVERSATION</label>
                    <input type="text" className="video-details__form-comment video-details__form-field" name="comment" id="comment" placeholder="Add a new comment"></input>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" className="video-details__form-button">COMMENT</button>
                </div>
            </div>

            {/* start of comments */}
            {videoDetails.comments.map((comment) => (
                <h2>{comment.name}</h2>
            )
            )}

            {/* {videoDetails.comments.map((comment) => (
                <h2>{comment.name}</h2>
            ) */}
        </section>
    )
}

export default VideoDetails;

 