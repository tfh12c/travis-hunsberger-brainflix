import './VideoDetails.scss';
import views from '../../assets/images/Icons/views.svg';
import likes from '../../assets/images/Icons/likes.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import comment from '../../assets/images/Icons/add_comment.svg';
import uniqid from 'uniqid';

function VideoDetails({ selectedVideo }) {

     //reformatting video timestamp in selectedVideo to date
        //get video details timestamp
        const videoTimestamp = selectedVideo.timestamp

        //reformat to date
        const videoDate = new Date(videoTimestamp);

        //reformat date to mm/dd/yy
        const videoPostedDate = new Intl.DateTimeFormat('en-US').format(videoDate)

    //takes comments array from selectedVideo and adds mm/dd/yy format 
        const commentArray = selectedVideo.comments.map(comment => {
            const container = {};

            container.name = comment.name;
            container.date = new Date(comment.timestamp)
            container.datePosted = new Intl.DateTimeFormat('en-US').format(container.date)
            container.comment = comment.comment
            container.id = uniqid()

            return container

        });
        
    return (
        <section className="video-details">
            <h1 className="video-details__title">{selectedVideo.title}</h1>
            <div className="video-details__metrics">
                <div className="video-details__channel-info">
                    <h3 className="video-details__channel">By {selectedVideo.channel}</h3>
                    <span className="video-details__date">{videoPostedDate}</span>
                </div>
                <div className="video-details__views-likes">
                    <span className="video-details__views">
                        <img className="video-details__views-icon" src={views} alt="views icon"/>{selectedVideo.views}
                    </span>
                    <span className="video-details__likes">
                        <img className="video-details__likes-icon" src={likes} alt="views icon"/>{selectedVideo.likes}
                    </span>
                </div>
            </div>
            <p className="video-details__description">{selectedVideo.description}</p>

            {/* start of comments form */}
            <h3 className="video-details__comments-length">{selectedVideo.comments.length} Comments</h3>
            <div className="video-details__comments-form"> 

                {/* <!-- Avatar Image --> */}
                <img src={avatar} alt="profile picture" className="video-details__comments-avatar"></img>

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
            {commentArray.map((comment) => (
            <article key={comment.id} className="video-details__comment-card">
                <img className="video-details__comment-avatar"></img> 
                <div className="video-details__comment-text-container">
                    <div className="video-details__comment-name-date-container">
                        <h2 className="video-details__comment-name">{comment.name}</h2>
                        <span className="video-details__comment-date">{comment.datePosted}</span>
                    </div>
                <p className="video-details__comment-text">{comment.comment}</p>
                </div>
            </article>
        )
        )}
        </section>
    )
}

export default VideoDetails;