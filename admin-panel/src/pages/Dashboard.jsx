import React, { useState, useEffect } from 'react';
import DashboardStats from '../components/Layout/DashboardStats';
import AnimeTable from '../components/Tables/AnimeTable';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalAnime: 0,
    totalEpisodes: 0,
    totalUsers: 0
  });
  const [recentAnime, setRecentAnime] = useState([]);

  useEffect(() => {
    // Mock data - replace with API calls
    setStats({
      totalAnime: 1250,
      totalEpisodes: 18500,
      totalUsers: 54230
    });
    
    setRecentAnime([
      { id: '1', title: { en: 'Chainsaw Man' }, type: 'series', createdAt: new Date() },
      { id: '2', title: { en: 'Demon Slayer' }, type: 'series', createdAt: new Date() },
      { id: '3', title: { en: 'Jujutsu Kaisen' }, type: 'series', createdAt: new Date() }
    ]);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Statistics Cards */}
      <DashboardStats stats={stats} />
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-center">
          Add New Anime
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg text-center">
          Manage Episodes
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-center">
          Theme Settings
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg text-center">
          View Analytics
        </button>
      </div>
      
      {/* Recent Anime */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Latest Anime Added</h2>
        </div>
        <AnimeTable anime={recentAnime} />
      </div>
    </div>
  );
};

export default Dashboard;