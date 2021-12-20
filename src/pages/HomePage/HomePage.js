import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';
import VideoPlayer from '../../components/Video/VideoPlayer';
import VideoDetails from '../../components//VideoDetails/VideoDetails';
import VideoNav from '../../components/VideoNav/VideoNav';

// API KEY    "cb5ad499-beee-4800-b523-87c70327d42a"
// API URL    "https://project-2-api.herokuapp.com"

class HomePage extends Component {

    state = {
        videos: [],
        selectedVideo: null,
    };

    getVideo = () => {
        if (this.props.match.params.videoId) {
            this.getSpecificVideoId(this.props.match.params.videoId);
        } else {
            axios.get("https://project-2-api.herokuapp.com/videos?api_key=cb5ad499-beee-4800-b523-87c70327d42a")
                .then((response) => {
                    this.getSpecificVideoId(response.data[0].id);
                });
        }
    };

    getSpecificVideoId(id) {
        axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=cb5ad499-beee-4800-b523-87c70327d42a`)
            .then((response) => {
                this.setState({
                    selectedVideo: response.data
                });
            });
    }


    componentDidMount() {
        axios.get("https://project-2-api.herokuapp.com/videos?api_key=cb5ad499-beee-4800-b523-87c70327d42a")
            .then((response) => {
                this.setState({
                    videos: response.data,
                });
            });
            this.getVideo();
    }

    componentDidUpdate(prevProps) {
        const newVideoId = this.props.match.params.videoId 
        const oldVideoId = prevProps.match.params.videoId 

        if(newVideoId !== oldVideoId) {
            this.getVideo();
        }
    }
    

    render() {

        if (this.state.selectedVideo === null) {
            return <p>Loading...</p>
        }

        const filteredVideos = this.state.videos.filter(
            (video) => video.id !== this.state.selectedVideo.id
        );

        return (
            <div className="home-page">
                <VideoPlayer selectedVideo={this.state.selectedVideo} />
                <div className="home-page__desktop-view">   
                    <VideoDetails selectedVideo={this.state.selectedVideo} />
                    <VideoNav videos={filteredVideos} />
                </div>
            </div>
        );
    }
} 

export default HomePage;