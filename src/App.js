import { Component } from "react";
import Header from "./components/Header/Header";
import videosData from './data/videos.json';
import videoDetailsData from './data/video-details.json';


class App extends Component {

  state = {
    videos: './data/videos.json',
    videoDetails: './data/video-details.json'
  }

  

render() {

  console.log(videosData);
  console.log(videoDetailsData);


  return (
    <>
     <Header />
       </>
   );
  }
}

export default App;
