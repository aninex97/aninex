import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeList = ({ episodes, animeId, currentEpisode }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Episodes</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {episodes.map(episode => (
          <Link
            key={episode._id}
            to={`/watch/${animeId}/${episode._id}`}
            className={`bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition ${
              currentEpisode === episode._id ? 'border-2 border-blue-500' : ''
            }`}
          >
            <div className="text-sm font-medium mb-1">Episode {episode.episode}</div>
            {episode.title && (
              <div className="text-xs text-gray-400 truncate">
                {episode.title.en || `Episode ${episode.episode}`}
              </div>
            )}
            <div className="text-xs text-gray-500 mt-1">
              {episode.duration ? `${Math.floor(episode.duration / 60)}min` : '24min'}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;