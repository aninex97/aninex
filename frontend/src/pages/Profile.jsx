import React from 'react';
import UserProfile from '../components/user/UserProfile';
import WatchHistory from '../components/user/WatchHistory';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <UserProfile />
        </div>
        <div className="lg:col-span-2">
          <WatchHistory />
        </div>
      </div>
    </div>
  );
};

export default Profile;