import { Component } from "react";
import Header from "./components/Header/Header";
import VideoNav from './components/VideoNav/VideoNav';
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';


class App extends Component {

  state = {
    videos: videosData,
    videoDetails: videoDetailsData,
  }

  

render() {

//  console.log(videosData);
//  console.log(videoDetailsData);

const filteredVideos = this.state.videos


  return (
    <>
     <Header />
     <VideoNav videosData={filteredVideos}/>
    </>
   );
  }
}

export default App;
