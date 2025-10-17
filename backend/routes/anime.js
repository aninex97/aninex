const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

router.get('/', animeController.getAnime);
router.get('/search', animeController.searchAnime);
router.get('/:id', animeController.getAnimeById);

module.exports = router;