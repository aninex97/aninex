import React, { useState } from 'react';

const EpisodeForm = ({ episode, onSubmit }) => {
  const [formData, setFormData] = useState(episode || {
    animeId: '',
    season: 1,
    episode: 1,
    title: { en: '', hi: '', ta: '', te: '', ja: '' },
    sources: [],
    duration: 1440,
    thumbnail: ''
  });

  const [source, setSource] = useState({
    server: '',
    type: 'hls',
    url: '',
    qualities: { '480p': '', '720p': '', '1080p': '' },
    languages: [],
    subtitles: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addSource = () => {
    if (source.server && source.url) {
      setFormData(prev => ({
        ...prev,
        sources: [...prev.sources, { ...source }]
      }));
      setSource({
        server: '',
        type: 'hls',
        url: '',
        qualities: { '480p': '', '720p': '', '1080p': '' },
        languages: [],
        subtitles: []
      });
    }
  };

  const removeSource = (index) => {
    setFormData(prev => ({
      ...prev,
      sources: prev.sources.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Anime ID</label>
          <input
            type="text"
            value={formData.animeId}
            onChange={(e) => setFormData(prev => ({ ...prev, animeId: e.target.value }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Season</label>
          <input
            type="number"
            value={formData.season}
            onChange={(e) => setFormData(prev => ({ ...prev, season: parseInt(e.target.value) }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Episode</label>
          <input
            type="number"
            value={formData.episode}
            onChange={(e) => setFormData(prev => ({ ...prev, episode: parseInt(e.target.value) }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (seconds)</label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
      </div>

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
        />
      </div>

      {/* Sources Management */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Video Sources</h3>
        
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Server Name</label>
              <input
                type="text"
                value={source.server}
                onChange={(e) => setSource(prev => ({ ...prev, server: e.target.value }))}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                value={source.type}
                onChange={(e) => setSource(prev => ({ ...prev, type: e.target.value }))}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="hls">HLS</option>
                <option value="direct">Direct</option>
                <option value="embed">Embed</option>
                <option value="torrent">Torrent</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">URL</label>
              <input
                type="text"
                value={source.url}
                onChange={(e) => setSource(prev => ({ ...prev, url: e.target.value }))}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={addSource}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Source
          </button>
        </div>

        {/* List of added sources */}
        <div className="space-y-2">
          {formData.sources.map((src, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-3 rounded-md border">
              <div>
                <span className="font-medium">{src.server}</span> - {src.type}
              </div>
              <button
                type="button"
                onClick={() => removeSource(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        {episode ? 'Update Episode' : 'Create Episode'}
      </button>
    </form>
  );
};

export default EpisodeForm;