import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/images/Icons/publish.svg';

function UploadPage() {

    //console.log(videos);

    return(
       <section className="video-upload">
           <h1 className="video-upload__header">Upload Video</h1>
            <p className="video-upload__thumbnail-header">VIDEO THUMBNAIL</p>
            <img  className="video-upload__thumbnail-img" src={thumbnail} alt="default video upload thumbnail"/>

            <label className="video-upload__video-title" htmlFor="comment">TITLE YOUR VIDEO</label>
            <input type="text" className="video-upload__title-input" name="comment" id="comment" placeholder="Add a title to your video"></input>

            <label className="video-upload__video-description" htmlFor="comment">ADD A VIDEO DESCRIPTION</label>
            <input type="text" className="video-upload__description-input" name="comment" id="comment" placeholder="Add a description to your video"></input>

            <button className="header__tablet-desktop-button">
                <img className="header__tablet-desktop-button-image" src={publish} alt="upload icon"/>PUBLISH
            </button>

            <button className="header__tablet-desktop-button">CANCEL</button>

       </section>
    );
}

export default UploadPage;