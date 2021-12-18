import './Video.scss';

function Video({ selectedVideo }) {


    return (
        <div className="video__container">
            <video className="video" controls poster={selectedVideo.image}>

            </video>
        </div>
    )
}

export default Video;