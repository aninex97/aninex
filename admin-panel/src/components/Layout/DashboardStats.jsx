import React from 'react';

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-blue-500 rounded-lg">
            <span className="text-white text-2xl">🎌</span>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Anime</p>
            <p className="text-2xl font-semibold">{stats.totalAnime}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-green-500 rounded-lg">
            <span className="text-white text-2xl">📺</span>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Episodes</p>
            <p className="text-2xl font-semibold">{stats.totalEpisodes}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-purple-500 rounded-lg">
            <span className="text-white text-2xl">👥</span>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Users</p>
            <p className="text-2xl font-semibold">{stats.totalUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;