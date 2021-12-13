import './VideoDetails.scss';
import views from '../../assets/images/Icons/views.svg';
import likes from '../../assets/images/Icons/likes.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import comment from '../../assets/images/Icons/add_comment.svg';

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
            <p className="video-details__description">{videoDetails.description}</p>

            {/* start of comments form, make into child */}
            <h3 className="video-details__comments-length">{videoDetails.comments.length} Comments</h3>
            <div className="video-details__comments-form"> 

                {/* <!-- Avatar Image --> */}
                <img src={avatar} className="video-details__comments-avatar"></img>

                <div className="video-details__form-text-container"> 
                    {/* <!-- Comment Input --> */}
                    <label className="video-details__form-label" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <input type="text" className="video-details__form-input" name="comment" id="comment" placeholder="Add a new comment"></input>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" className="video-details__form-button">
                        <img className="video-details__form-button-icon" src={comment} alt="upload icon"/>COMMENT</button>
                </div>
            </div>

            {/* start of comments */}
            {videoDetails.comments.map((comment) => (
                <article className="video-details__comment-card">
                    <img className="video-details__comment-avatar"></img>
                    <div className="video-details__comment-text-container">
                        <div className="video-details__comment-name-date-container">
                            <h2 className="video-details__comment-name">{comment.name}</h2>
                            <span className="video-details__comment-date">{comment.timestamp}</span>
                        </div>
                    <p className="video-details__comment-text">{comment.comment}</p>
                    </div>
                </article>
            )
            )}

            {/* {videoDetails.comments.map((comment) => (
                <h2>{comment.name}</h2>
            ) */}
        </section>
    )
}

export default VideoDetails;

 