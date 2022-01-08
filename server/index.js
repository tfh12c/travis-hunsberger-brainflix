const express = require('express');
const app = express();
const videoRoutes = require('./routes/videoRoutes');
const cors = require('cors');

// Configuration 
require('dotenv').config();
const port = process.env.PORT || 8080;

// Middleware 
app.use(express.json());
app.use(cors());

// Include video routes in server
app.use('/videos', videoRoutes);

// Start server
app.listen(port, () => {
    console.log('App listening on port ' + port);
})