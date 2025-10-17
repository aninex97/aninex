import React, { useState } from 'react';
import FileUpload from '../Common/FileUpload';

const AnimeForm = ({ anime, onSubmit }) => {
  const [formData, setFormData] = useState(anime || {
    title: { en: '', hi: '', ta: '', te: '', ja: '' },
    description: { en: '', hi: '', ta: '', te: '', ja: '' },
    type: 'series',
    genres: [],
    metadata: {
      year: new Date().getFullYear(),
      rating: 'PG-13',
      duration: '24 min',
      status: 'ongoing'
    },
    languages: {
      audio: [],
      subtitles: []
    },
    poster: '',
    banner: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleArrayChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value.split(',').map(item => item.trim())
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">English Title</label>
          <input
            type="text"
            value={formData.title.en}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              title: { ...prev.title, en: e.target.value }
            }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="series">Series</option>
            <option value="movie">Movie</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Genres (comma separated)</label>
          <input
            type="text"
            value={formData.genres.join(', ')}
            onChange={(e) => handleArrayChange('genres', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="number"
            value={formData.metadata.year}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              metadata: { ...prev.metadata, year: parseInt(e.target.value) }
            }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <select
            value={formData.metadata.rating}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              metadata: { ...prev.metadata, rating: e.target.value }
            }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="R+">R+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={formData.metadata.status}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              metadata: { ...prev.metadata, status: e.target.value }
            }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Audio Languages (comma separated)</label>
          <input
            type="text"
            value={formData.languages.audio.join(', ')}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              languages: { ...prev.languages, audio: e.target.value.split(',').map(item => item.trim()) }
            }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Subtitle Languages (comma separated)</label>
          <input
            type="text"
            value={formData.languages.subtitles.join(', ')}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              languages: { ...prev.languages, subtitles: e.target.value.split(',').map(item => item.trim()) }
            }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">English Description</label>
        <textarea
          value={formData.description.en}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            description: { ...prev.description, en: e.target.value }
          }))}
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Poster Image</label>
        <FileUpload
          currentFile={formData.poster}
          onFileUpload={(url) => setFormData(prev => ({ ...prev, poster: url }))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Banner Image</label>
        <FileUpload
          currentFile={formData.banner}
          onFileUpload={(url) => setFormData(prev => ({ ...prev, banner: url }))}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        {anime ? 'Update Anime' : 'Create Anime'}
      </button>
    </form>
  );
};

export default AnimeForm;