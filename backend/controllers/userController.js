const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getWatchHistory = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate('watchHistory.animeId')
      .populate('watchHistory.episodeId');
    res.json(user.watchHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToWatchHistory = async (req, res) => {
  try {
    const { animeId, episodeId, currentTime, duration } = req.body;
    
    const user = await User.findById(req.user.id);
    const existingIndex = user.watchHistory.findIndex(
      item => item.animeId.toString() === animeId
    );

    if (existingIndex > -1) {
      user.watchHistory[existingIndex] = {
        animeId,
        episodeId,
        currentTime,
        duration,
        watchedAt: new Date()
      };
    } else {
      user.watchHistory.push({
        animeId,
        episodeId,
        currentTime,
        duration,
        watchedAt: new Date()
      });
    }

    await user.save();
    res.json(user.watchHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};