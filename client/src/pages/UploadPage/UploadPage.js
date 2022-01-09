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
        event.preventDefault();


        axios.post("http://localhost:9000/videos", {
            title: event.target.title.value,
            description: event.target.description.value,
        })
        .then((response) => {
            this.setState({
                videos: response.data
                
            });
        });
        // .then((response) => {
        //     axios.get("http://localhost:9000/videos")
        //     .then((response) => {
                
        //         this.setState({
        //             videos: response.data
        //         })
        //     });
        // }); 

        alert("Thanks for uploading!")
        window.location.href = "/"
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
                        <form onSubmit={this.onPublish}>
                            {/* title of video form */}
                            <label className="video-upload__video-title" htmlFor="title">TITLE YOUR VIDEO</label>
                            <input type="text" className="video-upload__title-input" name="title" id="title" placeholder="Add a title to your video"></input>
                            {/* video description form */}
                            <label className="video-upload__video-description" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                            {/* CHANGE INPUT TYPE TO AREA FOR LARGER INPUT AREAS, look into resize none */}
                            <input type="text" className="video-upload__description-input" name="description" id="description" placeholder="Add a description to your video"></input>
                            <div className="video-upload__button-container">
                                    <button className="video-upload__publish-button" type="submit">
                                        <img className="video-upload__publish-image" src={publish} alt="upload icon"/>PUBLISH
                                    </button>
                                <button className="video-upload__cancel-button">CANCEL</button>
                            </div>
                        </form>
                    </div>
            </div>
                {/* <div className="video-upload__button-container">
                    <form onSubmit={this.onPublish}>
                        <button className="video-upload__publish-button" type="submit">
                            <img className="video-upload__publish-image" src={publish} alt="upload icon"/>PUBLISH
                        </button>
                    </form>
                    <button className="video-upload__cancel-button">CANCEL</button>
                </div> */}
        </section>
        );
    } 
}

export default UploadPage;