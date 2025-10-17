import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS configuration - Add your Vercel frontend URL
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://anime-world-frontend.vercel.app',
    'https://anime-world-frontend-git-main-yourusername.vercel.app',
    'https://anime-world-frontend-yourusername.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

connectDB();

// Import routes
import authRoutes from './routes/auth.js';
import animeRoutes from './routes/anime.js';
import videoRoutes from './routes/video.js';
import adminRoutes from './routes/admin.js';

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/anime', animeRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/admin', adminRoutes);

// Health check with more info
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    database: dbStatus,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    cors: {
      allowedOrigins: [
        'http://localhost:3000',
        'https://anime-world-frontend.vercel.app'
      ]
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: '🎌 Anime World Backend API',
    version: '1.0.0',
    status: 'Running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    endpoints: {
      health: '/health',
      auth: '/api/auth',
      anime: '/api/anime',
      video: '/api/video',
      admin: '/api/admin'
    }
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({ 
    message: 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { error: error.message })
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    path: req.originalUrl,
    availableEndpoints: ['/health', '/api/auth', '/api/anime', '/api/video', '/api/admin']
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 Frontend URLs configured for CORS`);
});
