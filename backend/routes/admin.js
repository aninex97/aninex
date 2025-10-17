const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// Protect all admin routes
router.use(auth.authenticate);
router.use(auth.authorize('admin'));

// Dashboard
router.get('/dashboard', adminController.getDashboardStats);

// Anime Management
router.post('/anime', upload.single('poster'), adminController.createAnime);
router.put('/anime/:id', upload.single('poster'), adminController.updateAnime);

// Episode Management
router.post('/episodes', adminController.createEpisode);

// Settings
router.get('/settings', adminController.getSettings);
router.put('/settings', adminController.updateSettings);

module.exports = router;