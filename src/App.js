import { Component } from "react";
import Header from "./components/Header/Header";
import Video from './components/Video/Video';
import VideoNav from './components/VideoNav/VideoNav';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';


class App extends Component {

  state = {
    videos: videosData,
    videoDetails: videoDetailsData[0],
  }

  
// 1. find the video we want from our json file
// 2. set state to the clicked plant 
handleSelectVideo = (clickedId) => {
  const foundVideo = videoDetailsData.find((video) =>
  clickedId === video.id)

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
     <VideoNav videosData={filteredVideos} selectVideo={this.handleSelectVideo}/>
    </>
   );
  }
}

export default App;
