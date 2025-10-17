import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import Home from './pages/Home';
import Anime from './pages/Anime';
import Cartoon from './pages/Cartoon';
import Movies from './pages/Movies';
import Series from './pages/Series';
import VideoPlayer from './pages/VideoPlayer';
import Search from './pages/Search';
import Profile from './pages/Profile';
import { testConnection } from './services/api';
import './styles/index.css';

function App() {
  useEffect(() => {
    // Test backend connection on app start
    testConnection();
  }, []);

  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            <main className="pb-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime" element={<Anime />} />
                <Route path="/cartoon" element={<Cartoon />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/watch/:animeId/:episodeId" element={<VideoPlayer />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Navigation />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
