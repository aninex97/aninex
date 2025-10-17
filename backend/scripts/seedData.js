import mongoose from 'mongoose';
import Anime from '../models/Anime.js';
import User from '../models/User.js';
import '../config/database.js';

const seedData = async () => {
  try {
    console.log('🌱 Starting to seed data...');

    // Clear existing data
    await Anime.deleteMany({});
    await User.deleteMany({});

    console.log('✅ Cleared existing data');

    // Create sample anime
    const sampleAnime = await Anime.create({
      title: {
        en: 'Demon Slayer: Kimetsu no Yaiba',
        hi: 'डेमन स्लेयर',
        ja: '鬼滅の刃'
      },
      description: {
        en: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly.',
        hi: 'एक परिवार पर राक्षसों द्वारा हमला किया जाता है और केवल दो सदस्य बचते हैं - तंजीरो और उसकी बहन नेज़ुको, जो धीरे-धीरे राक्षस में बदल रही है।'
      },
      type: 'series',
      genres: ['Action', 'Adventure', 'Fantasy'],
      metadata: {
        year: 2019,
        rating: 'PG-13',
        duration: '24 min',
        status: 'completed'
      },
      languages: {
        audio: ['Japanese', 'English', 'Hindi'],
        subtitles: ['English', 'Hindi']
      },
      poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop',
      banner: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&h=400&fit=crop',
      totalEpisodes: 26,
      isFeatured: true,
      views: 25000
    });

    console.log('✅ Created sample anime:', sampleAnime.title.en);

    // Create admin user
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@animeworld.com',
      password: 'admin123'
    });

    console.log('✅ Created admin user:', adminUser.username);

    console.log('🎉 Sample data seeded successfully!');
    console.log('📊 Check MongoDB Atlas for data');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
