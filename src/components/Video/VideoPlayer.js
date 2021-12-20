import './VideoPlayer.scss';

function Video({ selectedVideo }) {


    return (
        <div className="video__padding-container">   
            <div className="video__container">
                <video className="video" controls poster={selectedVideo.image}>

                </video>
            </div>
        </div>
    )
}

export default Video;