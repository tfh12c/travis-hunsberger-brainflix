import './HomePage.scss';
import { Component } from 'react';
import axios from 'axios';
import VideoPlayer from '../../components/Video/VideoPlayer';
import VideoDetails from '../../components//VideoDetails/VideoDetails';
import VideoNav from '../../components/VideoNav/VideoNav';

class HomePage extends Component {

    state = {
        videos: [],
        selectedVideo: null,
    };

    getVideo = () => {
        // checks URL from props in Router
        if (this.props.match.params.videoId) {
            this.getSpecificVideoId(this.props.match.params.videoId);
        } else {
            axios.get("http://localhost:9000/videos")
                .then((response) => {
                    this.getSpecificVideoId(response.data[0].id);
                });
        }
    };

    getSpecificVideoId(id) { // ID param is coming from getVideo
        axios.get(`http://localhost:9000/videos/${id}`)
            .then((response) => {
                this.setState({
                    selectedVideo: response.data
                });
            });
    }


    componentDidMount() {
        // GET list of videos and set state
        axios.get("http://localhost:9000/videos")
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

        // If new video ID in URL does not match old video ID in URL, run getVideo to get the correct video
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