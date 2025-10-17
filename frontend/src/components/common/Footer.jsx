import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🎌</span>
              <span className="text-xl font-bold text-white">AnimeWorld</span>
            </div>
            <p className="text-gray-400 text-sm">
              Stream your favorite anime series and movies in multiple languages with the best quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/anime" className="text-gray-400 hover:text-white">Anime</Link></li>
              <li><Link to="/movies" className="text-gray-400 hover:text-white">Movies</Link></li>
              <li><Link to="/series" className="text-gray-400 hover:text-white">Series</Link></li>
              <li><Link to="/cartoon" className="text-gray-400 hover:text-white">Cartoons</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">DMCA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Available Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Japanese', 'English', 'Hindi', 'Tamil', 'Telugu'].map(lang => (
                <span key={lang} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AnimeWorld. All Rights Reserved. | DMCA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;