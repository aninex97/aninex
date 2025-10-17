const Anime = require('../models/Anime');
const Episode = require('../models/Episode');
const User = require('../models/User');
const Settings = require('../models/Settings');

// Admin Dashboard Statistics
exports.getDashboardStats = async (req, res) => {
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
};

// Create/Update Anime
exports.createAnime = async (req, res) => {
  try {
    const anime = new Anime(req.body);
    await anime.save();
    res.status(201).json(anime);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateAnime = async (req, res) => {
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
};

// Episode Management
exports.createEpisode = async (req, res) => {
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
};

// Settings Management
exports.getSettings = async (req, res) => {
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
};

exports.updateSettings = async (req, res) => {
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
};