import express from 'express';
import Anime from '../models/Anime.js';
import Episode from '../models/Episode.js';

const router = express.Router();

// Get all anime with filtering
router.get('/', async (req, res) => {
  try {
    const { type, genre, language, year, status, page = 1, limit = 20 } = req.query;
    
    let filter = {};
    if (type) filter.type = type;
    if (genre) filter.genres = { $in: [genre] };
    if (language) filter['languages.audio'] = { $in: [language] };
    if (year) filter['metadata.year'] = year;
    if (status) filter['metadata.status'] = status;

    const anime = await Anime.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Anime.countDocuments(filter);

    res.json({
      anime,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single anime details
router.get('/:id', async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    
    const episodes = await Episode.find({ animeId: req.params.id }).sort({ season: 1, episode: 1 });
    
    res.json({ anime, episodes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search anime
router.get('/search', async (req, res) => {
  try {
    const { q, page = 1, limit = 20 } = req.query;
    
    const anime = await Anime.find({
      $or: [
        { 'title.en': { $regex: q, $options: 'i' } },
        { 'title.hi': { $regex: q, $options: 'i' } },
        { 'title.ta': { $regex: q, $options: 'i' } },
        { 'title.te': { $regex: q, $options: 'i' } },
        { 'title.ja': { $regex: q, $options: 'i' } }
      ]
    })
    .limit(limit * 1)
    .skip((page - 1) * limit);

    res.json(anime);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
