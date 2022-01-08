import { Component } from 'react';
import './UploadPage.scss';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/images/Icons/publish.svg';
import axios from 'axios';

class UploadPage extends Component {

    state = {
        videos: [],
    };

    onPublish = (event) => {
        event.preventDefault()

        alert("Thanks for uploading!")
        window.location.href = "/"

        axios.post("http://localhost:9000/videos", {
            title: event.target.title.value,
            description: event.target.description.value,
        })
        .then((response) => {
            axios.get("http://localhost:9000/videos")
            .then((response) => {
                this.setState({
                    videos: response.data
                })
            });
        }); 
    };

    render() {
        return (
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
                        {/* CHANGE INPUT TYPE TO AREA FOR LARGER INPUT AREAS, look into resize none */}
                        <input type="text" className="video-upload__description-input" name="comment" id="comment" placeholder="Add a description to your video"></input>
                    </div>
                </div>
                <div className="video-upload__button-container">
                    <form onSubmit={this.onPublish}>
                        <button className="video-upload__publish-button" type="submit">
                            <img className="video-upload__publish-image" src={publish} alt="upload icon"/>PUBLISH
                        </button>
                    </form>
                    <button className="video-upload__cancel-button">CANCEL</button>
                </div>
        </section>
        );
    } 
}

export default UploadPage;