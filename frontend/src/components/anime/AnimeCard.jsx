import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  return (
    <Link to={`/anime/${anime._id}`} className="block group">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
        <div className="relative">
          <img
            src={anime.poster || '/default-poster.jpg'}
            alt={anime.title?.en}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
            {anime.type === 'movie' ? 'Movie' : 'Series'}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
            <h3 className="text-white font-semibold text-sm truncate">
              {anime.title?.en}
            </h3>
            <div className="flex items-center justify-between mt-1 text-xs text-gray-300">
              <span>{anime.metadata?.year}</span>
              <span>{anime.metadata?.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="p-3">
          <div className="flex flex-wrap gap-1 mb-2">
            {anime.genres?.slice(0, 2).map(genre => (
              <span key={genre} className="bg-gray-700 px-2 py-1 rounded text-xs">
                {genre}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>👁️ {anime.views || 0}</span>
            {anime.type === 'series' && (
              <span>📺 {anime.totalEpisodes} eps</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;