import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeGrid = ({ anime, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-gray-800 rounded-lg h-80 animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (!anime || anime.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No anime found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {anime.map(item => (
        <AnimeCard key={item._id} anime={item} />
      ))}
    </div>
  );
};

export default AnimeGrid;