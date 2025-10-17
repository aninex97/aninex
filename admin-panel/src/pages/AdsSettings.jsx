import React, { useState } from 'react';

const AdsSettings = () => {
  const [adsSettings, setAdsSettings] = useState({
    popupCode: '',
    headerCode: '',
    sidebarCode: '',
    videoAdCode: ''
  });

  const handleSave = () => {
    // Save ads settings
    alert('Ads settings saved successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Ads Settings</h1>
      
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Popup/Popunder Ad Code</label>
          <textarea
            value={adsSettings.popupCode}
            onChange={(e) => setAdsSettings(prev => ({
              ...prev,
              popupCode: e.target.value
            }))}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 font-mono text-sm"
            placeholder="Paste your popup ad code here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Header Ad Code</label>
          <textarea
            value={adsSettings.headerCode}
            onChange={(e) => setAdsSettings(prev => ({
              ...prev,
              headerCode: e.target.value
            }))}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 font-mono text-sm"
            placeholder="Paste your header ad code here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sidebar Ad Code</label>
          <textarea
            value={adsSettings.sidebarCode}
            onChange={(e) => setAdsSettings(prev => ({
              ...prev,
              sidebarCode: e.target.value
            }))}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 font-mono text-sm"
            placeholder="Paste your sidebar ad code here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Video Ad Code</label>
          <textarea
            value={adsSettings.videoAdCode}
            onChange={(e) => setAdsSettings(prev => ({
              ...prev,
              videoAdCode: e.target.value
            }))}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 font-mono text-sm"
            placeholder="Paste your video ad code here..."
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Save Ads Settings
        </button>
      </div>
    </div>
  );
};

export default AdsSettings;