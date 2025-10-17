import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/anime', icon: '🎌', label: 'Anime' },
    { path: '/cartoon', icon: '📺', label: 'Cartoon' },
    { path: '/movies', icon: '🎬', label: 'Movies' },
    { path: '/series', icon: '📚', label: 'Series' },
    { path: '/profile', icon: '👤', label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 z-50">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center py-2 px-3 text-xs ${
              location.pathname === item.path ? 'text-blue-400' : 'text-gray-400'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;