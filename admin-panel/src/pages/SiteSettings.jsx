import React, { useState } from 'react';
import SettingsForm from '../components/Forms/SettingsForm';

const SiteSettings = () => {
  const [settings, setSettings] = useState({
    site: {
      title: 'AnimeWorld',
      description: 'Stream anime online',
      adminEmail: 'admin@animeworld.com',
      apiKey: 'sk_123456789'
    },
    theme: {
      logo: '',
      favicon: '',
      backgroundColor: '#1f2937',
      paginationLimit: 20,
      similarMoviesCount: 6
    }
  });

  const handleSubmit = (formData) => {
    setSettings(formData);
    // Here you would call the API to save settings
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Site Settings</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <SettingsForm settings={settings} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SiteSettings;