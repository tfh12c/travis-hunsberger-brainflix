import './VideoDetails.scss';
import views from '../../assets/images/Icons/views.svg';
import likes from '../../assets/images/Icons/likes.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import comment from '../../assets/images/Icons/add_comment.svg';

function VideoDetails({ selectedVideo }) {

    console.log(selectedVideo);
    console.log(selectedVideo.timestamp);

    //reformatting video timestamp to date
        //grab video details timestamp
        const videoTimestamp = selectedVideo.timestamp
            console.log(videoTimestamp);

        //reformat to date
        const videoDate = new Date(videoTimestamp);
            console.log(videoDate);

        //reformat to mm/dd//yyyy format
        const videoPostedDate = videoDate.toDateString();
        console.log(videoPostedDate);

        //Why isn't this working?
        // const videoPostedDateError = new Intl.DateTimeFormat('en-US').format(videoDate)
        //     console.log(videoPostedDate);

    //takes comments array and reformats
        // const commentArray = selectedVideo.comments.map(comment => {
        //     const container = {};

        //     container.name = comment.name;
        //     container.date = new Date(comment.timestamp)
        //     container.datePosted = new Intl.DateTimeFormat('en-US').format(container.date)
        //     container.comment = comment.comment

        //     return container

        // });
        //     console.log(commentArray)
        
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
            {/* Ask why {selectedVideo.comments.length} won't pull in the length of comments array */}
            <h3 className="video-details__comments-length">{} Comments</h3>
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
            {/* {commentArray.map((comment) => (
            <article className="video-details__comment-card">
                
                <img className="video-details__comment-avatar"></img> 
                <div className="video-details__comment-text-container">
                    <div className="video-details__comment-name-date-container">
                        <h2 className="video-details__comment-name">{comment.name}</h2>
                        <span className="video-details__comment-date">{comment.datePosted}</span>
                    </div>
                <p className="video-details__comment-text">{comment.comment}</p>
                </div>
            </article>
        ) */}
        )}
        </section>
    )
}

export default VideoDetails;

 