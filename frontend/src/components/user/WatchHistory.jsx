import React from 'react';
import { Link } from 'react-router-dom';

const WatchHistory = () => {
  // Mock data - replace with actual API call
  const watchHistory = [
    {
      id: 1,
      animeId: '1',
      title: 'Chainsaw Man',
      episode: 12,
      currentTime: 1200,
      duration: 1440,
      thumbnail: '/thumbnails/chainsaw-man.jpg',
      watchedAt: new Date()
    },
    {
      id: 2,
      animeId: '2',
      title: 'Demon Slayer',
      episode: 8,
      currentTime: 800,
      duration: 1440,
      thumbnail: '/thumbnails/demon-slayer.jpg',
      watchedAt: new Date(Date.now() - 86400000)
    }
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const getProgress = (current, total) => {
    return (current / total) * 100;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Watch History</h2>
      
      {watchHistory.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No watch history yet
        </div>
      ) : (
        <div className="space-y-4">
          {watchHistory.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-12 object-cover rounded"
                />
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-400">
                        Episode {item.episode} • {formatDate(item.watchedAt)}
                      </p>
                    </div>
                    <Link
                      to={`/watch/${item.animeId}/ep${item.episode}`}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                    >
                      Continue
                    </Link>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${getProgress(item.currentTime, item.duration)}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>{formatTime(item.currentTime)}</span>
                    <span>{formatTime(item.duration)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchHistory;