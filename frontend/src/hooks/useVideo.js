import { useState } from 'react';
import { api } from '../services/api';

export const useVideo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getVideoData = async (animeId, episodeId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/video/${animeId}/${episodeId}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch video data');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const addToWatchHistory = async (watchData) => {
    try {
      await api.post('/video/watch-history', watchData);
    } catch (err) {
      console.error('Failed to update watch history:', err);
    }
  };

  return {
    loading,
    error,
    getVideoData,
    addToWatchHistory
  };
};