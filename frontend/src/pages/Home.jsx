import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimeGrid from '../components/anime/AnimeGrid';
import { useAnime } from '../hooks/useAnime';

const Home = () => {
  const [featuredAnime, setFeaturedAnime] = useState([]);
  const [newAnime, setNewAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const { getAnime } = useAnime();

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      const [featured, newest, trending] = await Promise.all([
        getAnime({ isFeatured: true, limit: 8 }),
        getAnime({ limit: 12, sort: '-createdAt' }),
        getAnime({ limit: 10, sort: '-views' })
      ]);
      
      setFeaturedAnime(featured.anime || []);
      setNewAnime(newest.anime || []);
      setTrendingAnime(trending.anime || []);
    } catch (error) {
      console.error('Error loading home data:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Banner */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Anime World</h1>
          <p className="text-xl mb-6">Stream thousands of anime series and movies in multiple languages</p>
          <Link 
            to="/anime" 
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Anime
          </Link>
        </div>
      </section>

      {/* Continue Watching */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Continue Watching</h2>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <p className="text-gray-400">No recent watches</p>
        </div>
      </section>

      {/* Newest Drops */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Newest Drops</h2>
          <Link to="/anime?sort=newest" className="text-blue-400 hover:text-blue-300">
            View All
          </Link>
        </div>
        <AnimeGrid anime={newAnime} />
      </section>

      {/* Trending Now */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <Link to="/anime?sort=trending" className="text-blue-400 hover:text-blue-300">
            View All
          </Link>
        </div>
        <AnimeGrid anime={trendingAnime} />
      </section>

      {/* Language Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Available Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Japanese', 'English', 'Hindi', 'Tamil', 'Telugu'].map((lang) => (
            <div key={lang} className="bg-gray-800 rounded-lg p-4 text-center">
              <span className="text-lg">{lang}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;