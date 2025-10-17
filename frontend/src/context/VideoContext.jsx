import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};

export const VideoProvider = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [playbackSettings, setPlaybackSettings] = useState({
    quality: '720p',
    volume: 1,
    playbackRate: 1,
    subtitles: 'off',
    audioLanguage: 'Japanese'
  });

  const updatePlaybackSettings = (newSettings) => {
    setPlaybackSettings(prev => ({
      ...prev,
      ...newSettings
    }));
  };

  const value = {
    currentVideo,
    setCurrentVideo,
    playbackSettings,
    updatePlaybackSettings
  };

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
};