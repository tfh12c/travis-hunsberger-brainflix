const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');


// Function to read videos 
function readVideos() {
    const videosFile = fs.readFileSync('./data/videos.json');
    const videosData = JSON.parse(videosFile);
    return videosData;
}

// GET endpoint for all videos
router.get('/', (req, res) => {
    const videos = readVideos();
    res.send(videos);
})

// GET endpoint for specific video by ID 
router.get('/:videoId', (req, res) => {
    const videos = readVideos();

    // Find single video, matching the ID to requested/url ID
    const singleVideo = videos.find((video) => video.id === req.params.videoId)

    // Validation/response if video was found
    if (!singleVideo) {
        return res.status(404).send("Uh-oh, no video found");
    }

    res.json(singleVideo);
})

// POST endpoint to add a video
router.post('/', (req, res) => {
    // Make new video with unique ID
    const newVideo = {
        id: uniqid(),
        title: req.body.title,
        description: req.body.description
    };

    // Add new video to videos json data
    const videos = readVideos();
    videos.push(newVideo);
    fs.writeFileSync('./data/videos.json', JSON.stringify(videos));

    // Respond with the video that was created
    res.status(201).json(newVideo);
})

module.exports = router;