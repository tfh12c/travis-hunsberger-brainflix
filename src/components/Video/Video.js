import './Video.scss';

function Video({ videoDetails }) {

    console.log(videoDetails);

    return (
        <div className="video__container">
            <video className="video" controls poster={videoDetails.image}>

            </video>
        </div>
    )
}

export default Video;