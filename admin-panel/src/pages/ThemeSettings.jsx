import React, { useState } from 'react';
import FileUpload from '../components/Common/FileUpload';

const ThemeSettings = () => {
  const [themeSettings, setThemeSettings] = useState({
    logo: '',
    favicon: '',
    backgroundColor: '#1f2937',
    paginationLimit: 20,
    similarMoviesCount: 6
  });

  const handleSave = async () => {
    try {
      // Save theme settings API call
      console.log('Saving theme settings:', themeSettings);
      alert('Theme settings saved successfully!');
    } catch (error) {
      console.error('Error saving theme settings:', error);
      alert('Error saving theme settings');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Theme Settings</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        {/* Logo Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Website Logo</label>
          <FileUpload
            currentFile={themeSettings.logo}
            onFileUpload={(fileUrl) => setThemeSettings({...themeSettings, logo: fileUrl})}
            accept="image/*"
          />
        </div>

        {/* Favicon Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Favicon</label>
          <FileUpload
            currentFile={themeSettings.favicon}
            onFileUpload={(fileUrl) => setThemeSettings({...themeSettings, favicon: fileUrl})}
            accept="image/x-icon,image/png"
          />
        </div>

        {/* Background Color */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
          <input
            type="color"
            value={themeSettings.backgroundColor}
            onChange={(e) => setThemeSettings({...themeSettings, backgroundColor: e.target.value})}
            className="w-20 h-10 cursor-pointer"
          />
          <input
            type="text"
            value={themeSettings.backgroundColor}
            onChange={(e) => setThemeSettings({...themeSettings, backgroundColor: e.target.value})}
            className="ml-2 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Pagination Limit */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Pagination Limit</label>
          <input
            type="number"
            value={themeSettings.paginationLimit}
            onChange={(e) => setThemeSettings({...themeSettings, paginationLimit: parseInt(e.target.value)})}
            className="w-32 px-3 py-2 border border-gray-300 rounded-md"
            min="1"
            max="100"
          />
        </div>

        {/* Similar Movies Count */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Similar Movies Count</label>
          <input
            type="number"
            value={themeSettings.similarMoviesCount}
            onChange={(e) => setThemeSettings({...themeSettings, similarMoviesCount: parseInt(e.target.value)})}
            className="w-32 px-3 py-2 border border-gray-300 rounded-md"
            min="1"
            max="20"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Save Theme Settings
        </button>
      </div>
    </div>
  );
};

export default ThemeSettings;