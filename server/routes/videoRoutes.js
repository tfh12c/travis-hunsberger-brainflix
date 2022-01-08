const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');


// Function to read videos data
function readVideos() {
    const videosFile = fs.readFileSync('./data/videos.json');
    const videosData = JSON.parse(videosFile);
    return videosData;
}

// Function to write videos data
function writeVideos(data) {
    fs.writeFileSync('./data/videos.json', JSON.stringify(data));
}

// Routes 

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
    const videos = readVideos();

    // Make new video with unique ID
    const newVideo = {
        title: req.body.title,
        channel: "Travy Is Maybe A WebDev",
        image: "../public/images/Upload-video-preview.jpg",
        description: req.body.description,
        views: "7,777,777",
        likes: "999,999",
        duration: "4:20",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1626032763000,
        comments: [
            {
                name: "NotTravy Hunsberger",
                comment: "I'm baby seitan austin retro man bun, lyft cronut activated charcoal pok pok artisan photo booth tumblr small batch tousled biodiesel.",
                likes: 0,
                timestamp: 1628522461000
            },
            {
                name: "DefNot TravyH",
                comment: "Copper mug bespoke wolf lumbersexual, activated charcoal pok pok stumptown cliche portland. Art party man bun la croix put a bird on it ramps, migas locavore.",
                likes: 0,
                timestamp: 1628522461000 
            }
        ],
        id: uniqid()
    };

    // Push new video into videos data
    videos.push(newVideo);

    // Write the new video data to file
    writeVideos(videos);

    // Send response
    res.status(201).json(newVideo);
});

module.exports = router;