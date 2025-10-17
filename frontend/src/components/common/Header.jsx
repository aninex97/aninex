import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import SearchBar from './SearchBar';

const Header = () => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎌</span>
            <span className="text-xl font-bold text-white">AnimeWorld</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <SearchBar />
          </div>

          {/* Language Selector & User Menu */}
          <div className="flex items-center space-x-4">
            <select
              value={currentLanguage}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ta">Tamil</option>
              <option value="te">Telugu</option>
              <option value="ja">Japanese</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;