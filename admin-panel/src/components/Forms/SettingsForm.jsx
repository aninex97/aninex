import React, { useState } from 'react';

const SettingsForm = ({ settings, onSubmit }) => {
  const [formData, setFormData] = useState(settings || {
    site: {
      title: '',
      description: '',
      adminEmail: '',
      apiKey: ''
    },
    theme: {
      logo: '',
      favicon: '',
      backgroundColor: '#1f2937',
      paginationLimit: 20,
      similarMoviesCount: 6
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Site Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Site Title</label>
            <input
              type="text"
              value={formData.site.title}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                site: { ...prev.site, title: e.target.value }
              }))}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Admin Email</label>
            <input
              type="email"
              value={formData.site.adminEmail}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                site: { ...prev.site, adminEmail: e.target.value }
              }))}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Site Description</label>
            <textarea
              value={formData.site.description}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                site: { ...prev.site, description: e.target.value }
              }))}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Theme Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Background Color</label>
            <input
              type="color"
              value={formData.theme.backgroundColor}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                theme: { ...prev.theme, backgroundColor: e.target.value }
              }))}
              className="mt-1 block w-full h-10 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pagination Limit</label>
            <input
              type="number"
              value={formData.theme.paginationLimit}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                theme: { ...prev.theme, paginationLimit: parseInt(e.target.value) }
              }))}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Similar Movies Count</label>
            <input
              type="number"
              value={formData.theme.similarMoviesCount}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                theme: { ...prev.theme, similarMoviesCount: parseInt(e.target.value) }
              }))}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Save Settings
      </button>
    </form>
  );
};

export default SettingsForm;