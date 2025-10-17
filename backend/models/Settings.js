import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  site: {
    title: { type: String, default: 'Anime World' },
    description: { type: String, default: 'Stream anime online' },
    adminEmail: String,
    apiKey: String
  },
  theme: {
    logo: String,
    favicon: String,
    backgroundColor: { type: String, default: '#1f2937' },
    paginationLimit: { type: Number, default: 20 },
    similarMoviesCount: { type: Number, default: 6 }
  },
  seo: {
    animeTemplate: String,
    episodeTemplate: String,
    metaKeywords: String,
    metaDescription: String
  },
  ads: {
    popupCode: String,
    headerCode: String,
    sidebarCode: String,
    videoAdCode: String
  },
  updatedAt: { type: Date, default: Date.now }
});

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
