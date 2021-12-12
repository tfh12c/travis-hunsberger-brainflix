import { Component } from "react";
import Header from "./components/Header/Header";
import Video from './components/Video/Video';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoNav from './components/VideoNav/VideoNav';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';


class App extends Component {

  state = {
    videos: videosData,
    videoDetails: videoDetailsData[0],
  }

  

//function to update main video section to display clicked video from videoNav
handleSelectVideo = (clickedId, event) => {
  event.preventDefault();

  // 1. find the video we want from our json file
  const foundVideo = videoDetailsData.find((video) =>
  clickedId === video.id)

  // 2. set state to the clicked plant 
  this.setState({
    videoDetails: foundVideo,
  })
}

render() {

//  console.log(videosData);
//  console.log(videoDetailsData);

const filteredVideos = this.state.videos.filter((video) =>
video.id !== this.state.videoDetails.id)


  return (
    <>
     <Header />
     <Video videoDetails={this.state.videoDetails}/>
     <VideoDetails videoDetails={this.state.videoDetails}/>
     <VideoNav videosData={filteredVideos} selectVideo={this.handleSelectVideo}/>
    </>
   );
  }
}

export default App;
