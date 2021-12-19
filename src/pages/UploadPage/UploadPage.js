import './UploadPage.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/images/Icons/publish.svg';

function UploadPage() {

    //console.log(videos);

    return(
       <section className="video-upload">
           <h1 className="video-upload__title">Upload Video</h1>
            <p className="video-upload__thumbnail-header">VIDEO THUMBNAIL</p>
            <div className="video-upload_thumbnail-container">
                <img  className="video-upload__thumbnail-img" src={thumbnail} alt="default video upload thumbnail"/>
            </div>
            <label className="video-upload__video-title" htmlFor="comment">TITLE YOUR VIDEO</label>
            <input type="text" className="video-upload__title-input" name="comment" id="comment" placeholder="Add a title to your video"></input>

            <label className="video-upload__video-description" htmlFor="comment">ADD A VIDEO DESCRIPTION</label>
            <input type="text" className="video-upload__description-input" name="comment" id="comment" placeholder="Add a description to your video"></input>
        
            <button className="video-upload__publish-button">
                <img className="video-upload__publish-image" src={publish} alt="upload icon"/>PUBLISH
            </button>

            <button className="video-upload__cancel-button">CANCEL</button>

       </section>
    );
}

export default UploadPage;