const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  animeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime', required: true },
  season: { type: Number, default: 1 },
  episode: { type: Number, required: true },
  title: {
    en: String,
    hi: String,
    ta: String,
    te: String,
    ja: String
  },
  sources: [{
    server: { type: String, required: true },
    type: { type: String, enum: ['hls', 'direct', 'embed', 'torrent'], required: true },
    url: { type: String, required: true },
    qualities: {
      '480p': String,
      '720p': String,
      '1080p': String
    },
    languages: [{ type: String }],
    subtitles: [{
      language: String,
      url: String
    }]
  }],
  duration: Number,
  thumbnail: String,
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Episode', episodeSchema);