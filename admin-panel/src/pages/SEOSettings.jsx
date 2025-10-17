import React, { useState } from 'react';
import SEOEditor from '../components/Common/SEOEditor';

const SEOSettings = () => {
  const [seoSettings, setSeoSettings] = useState({
    animeTemplate: 'Watch [title] online - [plot]',
    episodeTemplate: '[title] Episode [episode] - [plot]',
    metaKeywords: 'anime, stream, watch online',
    metaDescription: 'Watch the latest anime series and movies online for free.'
  });

  const handleSave = () => {
    // Save SEO settings
    alert('SEO settings saved successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">SEO Settings</h1>
      
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Anime SEO Template</h3>
          <SEOEditor
            template={seoSettings.animeTemplate}
            onChange={(value) => setSeoSettings(prev => ({
              ...prev,
              animeTemplate: value
            }))}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Episode SEO Template</h3>
          <SEOEditor
            template={seoSettings.episodeTemplate}
            onChange={(value) => setSeoSettings(prev => ({
              ...prev,
              episodeTemplate: value
            }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Meta Keywords</label>
          <input
            type="text"
            value={seoSettings.metaKeywords}
            onChange={(e) => setSeoSettings(prev => ({
              ...prev,
              metaKeywords: e.target.value
            }))}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Meta Description</label>
          <textarea
            value={seoSettings.metaDescription}
            onChange={(e) => setSeoSettings(prev => ({
              ...prev,
              metaDescription: e.target.value
            }))}
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Save SEO Settings
        </button>
      </div>
    </div>
  );
};

export default SEOSettings;