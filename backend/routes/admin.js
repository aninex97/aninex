import express from 'express';
import Anime from '../models/Anime.js';
import Episode from '../models/Episode.js';
import User from '../models/User.js';
import Settings from '../models/Settings.js';

const router = express.Router();

// Admin Dashboard Statistics
router.get('/dashboard', async (req, res) => {
  try {
    const totalAnime = await Anime.countDocuments();
    const totalEpisodes = await Episode.countDocuments();
    const totalUsers = await User.countDocuments();
    
    const recentAnime = await Anime.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('title type createdAt');

    res.json({
      totalAnime,
      totalEpisodes,
      totalUsers,
      recentAnime
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Anime
router.post('/anime', async (req, res) => {
  try {
    const anime = new Anime(req.body);
    await anime.save();
    res.status(201).json(anime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Anime
router.put('/anime/:id', async (req, res) => {
  try {
    const anime = await Anime.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }
    res.json(anime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create Episode
router.post('/episodes', async (req, res) => {
  try {
    const episode = new Episode(req.body);
    await episode.save();
    
    // Update anime episode count
    await Anime.findByIdAndUpdate(req.body.animeId, {
      $inc: { totalEpisodes: 1 }
    });

    res.status(201).json(episode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Settings
router.get('/settings', async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings();
      await settings.save();
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Settings
router.put('/settings', async (req, res) => {
  try {
    const settings = await Settings.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(settings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
