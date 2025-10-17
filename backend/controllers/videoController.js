const Episode = require('../models/Episode');
const Anime = require('../models/Anime');

exports.getVideoData = async (req, res) => {
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
};

exports.getEpisodeSources = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.episodeId);
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    
    res.json(episode.sources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};