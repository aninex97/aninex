import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/admin';

const adminApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const adminService = {
  // Dashboard
  getDashboardStats: () => adminApi.get('/dashboard'),

  // Anime Management
  getAnime: (params) => adminApi.get('/anime', { params }),
  createAnime: (data) => adminApi.post('/anime', data),
  updateAnime: (id, data) => adminApi.put(`/anime/${id}`, data),
  deleteAnime: (id) => adminApi.delete(`/anime/${id}`),

  // Episode Management
  createEpisode: (data) => adminApi.post('/episodes', data),
  updateEpisode: (id, data) => adminApi.put(`/episodes/${id}`, data),
  deleteEpisode: (id) => adminApi.delete(`/episodes/${id}`),

  // Settings
  getSettings: () => adminApi.get('/settings'),
  updateSettings: (data) => adminApi.put('/settings', data),
};

export default adminApi;