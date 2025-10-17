import express from 'express';
import Episode from '../models/Episode.js';
import Anime from '../models/Anime.js';

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

    res.json({
      episode,
      anime: episode.animeId
    });
  } catch (error) {
    console.error('Get video error:', error);
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
    console.error('Get sources error:', error);
    res.status(500).json({ message: error.message });
  }
});

// Add to watch history
router.post('/watch-history', async (req, res) => {
  try {
    const { animeId, episodeId, currentTime, duration } = req.body;
    
    // For demo purposes - just return success
    // In real app, save to user's watch history
    res.json({ 
      message: 'Watch history updated',
      animeId,
      episodeId,
      currentTime,
      duration,
      watchedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Watch history error:', error);
    res.status(400).json({ message: error.message });
  }
});

export default router;
