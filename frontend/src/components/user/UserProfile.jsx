import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: 'animefan123',
    email: 'user@example.com',
    profile: {
      preferredLanguage: 'en',
      preferredAudio: 'Japanese',
      autoPlay: true,
      quality: '720p'
    }
  });

  const handleSave = () => {
    // Save user preferences
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 space-y-6">
        {/* Basic Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Language</label>
              <select
                value={user.profile.preferredLanguage}
                onChange={(e) => setUser({
                  ...user, 
                  profile: {...user.profile, preferredLanguage: e.target.value}
                })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Audio Language</label>
              <select
                value={user.profile.preferredAudio}
                onChange={(e) => setUser({
                  ...user, 
                  profile: {...user.profile, preferredAudio: e.target.value}
                })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
              >
                <option value="Japanese">Japanese</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Default Quality</label>
              <select
                value={user.profile.quality}
                onChange={(e) => setUser({
                  ...user, 
                  profile: {...user.profile, quality: e.target.value}
                })}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
              >
                <option value="480p">480p</option>
                <option value="720p">720p</option>
                <option value="1080p">1080p</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={user.profile.autoPlay}
                onChange={(e) => setUser({
                  ...user, 
                  profile: {...user.profile, autoPlay: e.target.checked}
                })}
                className="mr-2"
              />
              <label className="text-sm">Auto-play next episode</label>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserProfile;