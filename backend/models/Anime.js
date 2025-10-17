const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    hi: String,
    ta: String,
    te: String,
    ja: String
  },
  description: {
    en: String,
    hi: String,
    ta: String,
    te: String,
    ja: String
  },
  type: { type: String, enum: ['series', 'movie'], required: true },
  genres: [{ type: String }],
  metadata: {
    year: Number,
    rating: String,
    duration: String,
    status: { type: String, enum: ['ongoing', 'completed'], default: 'completed' }
  },
  languages: {
    audio: [{ type: String }],
    subtitles: [{ type: String }]
  },
  poster: String,
  banner: String,
  totalEpisodes: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Anime', animeSchema);