import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    avatar: String,
    preferredLanguage: { type: String, default: 'en' },
    preferredAudio: { type: String, default: 'Japanese' },
    autoPlay: { type: Boolean, default: true },
    quality: { type: String, default: '720p' }
  },
  watchHistory: [{
    animeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime' },
    episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
    currentTime: Number,
    duration: Number,
    watchedAt: { type: Date, default: Date.now }
  }],
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Anime' }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Anime' }],
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);
export default User;
