const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/animeworld';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
  console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
});

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Anime World Backend API',
    status: 'Server is running!',
    timestamp: new Date().toISOString()
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Healthy',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working!',
    data: ['anime', 'movies', 'series']
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Anime World Backend Server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔗 MongoDB: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Connecting...'}`);
});

module.exports = app;
