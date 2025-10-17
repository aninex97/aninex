import { useState, useEffect } from 'react';
import { api } from '../services/api';

export const useAnime = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAnime = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/anime', { params });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch anime');
      return { anime: [], total: 0 };
    } finally {
      setLoading(false);
    }
  };

  const getAnimeById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/anime/${id}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch anime details');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const searchAnime = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/anime/search', { params: { q: query } });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Search failed');
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getAnime,
    getAnimeById,
    searchAnime
  };
};