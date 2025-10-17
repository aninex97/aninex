const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const auth = require('../middleware/auth');

router.get('/:animeId/:episodeId', videoController.getVideoData);
router.get('/sources/:episodeId', videoController.getEpisodeSources);

// Protected routes
router.use(auth.authenticate);
router.post('/watch-history', videoController.addToWatchHistory);

module.exports = router;