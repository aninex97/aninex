import express from 'express';
import Episode from '../models/Episode.js';
import Anime from '../models/Anime.js';
import User from '../models/User.js';

const router = express.Router();

// Get video data
router.get('/:animeId/:episodeId', async (req, res) => {
  try {
    const { animeId, episodeId } = req.params;
    
    const episode = await Episode.findById(episodeId).populate('animeId');
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }

    // Increment views
    await Episode.findByIdAndUpdate(episodeId, { $inc: { views: 1 } });
    await Anime.findByIdAndUpdate(animeId, { $inc: { views: 1 } });

    // Get next episode
    const nextEpisode = await Episode.findOne({
      animeId,
      $or: [
        { season: episode.season, episode: { $gt: episode.episode } },
        { season: { $gt: episode.season } }
      ]
    }).sort({ season: 1, episode: 1 });

    res.json({
      episode,
      nextEpisode: nextEpisode || null
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get episode sources
router.get('/sources/:episodeId', async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.episodeId);
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    
    res.json(episode.sources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add to watch history
router.post('/watch-history', async (req, res) => {
  try {
    const { animeId, episodeId, currentTime, duration } = req.body;
    
    // For now, just acknowledge the request
    // In a real app, you'd save this to user's watch history
    res.json({ 
      message: 'Watch history updated',
      animeId,
      episodeId,
      currentTime,
      duration
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
