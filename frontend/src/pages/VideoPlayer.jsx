import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVideo } from '../hooks/useVideo';
import VideoPlayer from '../components/video/VideoPlayer';

const VideoPlayerPage = () => {
  const { animeId, episodeId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getVideoData } = useVideo();

  useEffect(() => {
    loadVideoData();
  }, [animeId, episodeId]);

  const loadVideoData = async () => {
    setLoading(true);
    const data = await getVideoData(animeId, episodeId);
    setVideoData(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p>Loading video...</p>
        </div>
      </div>
    );
  }

  if (!videoData) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Video Not Found</h2>
          <p className="text-gray-400">The requested video could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <VideoPlayer 
        animeId={animeId}
        episodeId={episodeId}
        videoData={videoData}
      />
    </div>
  );
};

export default VideoPlayerPage;