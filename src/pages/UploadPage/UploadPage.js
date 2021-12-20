import './UploadPage.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/images/Icons/publish.svg';
import { Redirect } from 'react-router-dom';

function UploadPage() {

    //tried a few different things here, just could not get the redirect to work, will follow up w/ open studio
    const onPublish = (event) => {
        event.preventDefault()
        alert("Thanks for uploading!")
        return (
            <Redirect to="/" />
        );
    }

    return(
       <section className="video-upload">
           <h1 className="video-upload__title">Upload Video</h1>
           <div className="video-upload__video-content-container"> 
                <div className="video-upload__thumbnail-header-image-container">
                    <p className="video-upload__thumbnail-header">VIDEO THUMBNAIL</p>
                    <div className="video-upload_thumbnail-container">
                        <img  className="video-upload__thumbnail-img" src={thumbnail} alt="default video upload thumbnail"/>
                    </div>
                </div>
                <div className="video-upload__form-items-container">
                    {/* title of video form */}
                    <label className="video-upload__video-title" htmlFor="comment">TITLE YOUR VIDEO</label>
                    <input type="text" className="video-upload__title-input" name="comment" id="comment" placeholder="Add a title to your video"></input>
                    {/* video description form */}
                    <label className="video-upload__video-description" htmlFor="comment">ADD A VIDEO DESCRIPTION</label>
                    <input type="text" className="video-upload__description-input" name="comment" id="comment" placeholder="Add a description to your video"></input>
                </div>
            </div>
            <div className="video-upload__button-container">
                <form onSubmit={onPublish}>
                    <button className="video-upload__publish-button" type="submit">
                        <img className="video-upload__publish-image" src={publish} alt="upload icon"/>PUBLISH
                    </button>
                </form>
                <button className="video-upload__cancel-button">CANCEL</button>
            </div>
       </section>
    );
}

export default UploadPage;