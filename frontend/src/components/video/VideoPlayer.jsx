import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServerSelector from './ServerSelector';
import SubtitleSelector from './SubtitleSelector';

const VideoPlayer = () => {
  const { animeId, episodeId } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  
  const [episode, setEpisode] = useState(null);
  const [selectedServer, setSelectedServer] = useState(0);
  const [selectedQuality, setSelectedQuality] = useState('720p');
  const [selectedAudio, setSelectedAudio] = useState('Japanese');
  const [selectedSubtitle, setSelectedSubtitle] = useState('off');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadEpisodeData();
  }, [animeId, episodeId]);

  const loadEpisodeData = async () => {
    // Mock data - replace with actual API call
    const mockEpisode = {
      _id: episodeId,
      title: { en: 'Episode 1' },
      sources: [
        {
          server: 'Server 1',
          type: 'hls',
          url: 'https://example.com/stream.m3u8',
          qualities: {
            '480p': 'https://example.com/480p.m3u8',
            '720p': 'https://example.com/720p.m3u8',
            '1080p': 'https://example.com/1080p.m3u8'
          },
          languages: ['Japanese', 'English'],
          subtitles: [
            { language: 'en', url: '/subtitles/en.vtt' },
            { language: 'hi', url: '/subtitles/hi.vtt' }
          ]
        }
      ]
    };
    setEpisode(mockEpisode);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentSource = episode?.sources?.[selectedServer];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Video Player */}
      <div className="bg-black rounded-lg overflow-hidden mb-4">
        <video
          ref={videoRef}
          className="w-full h-auto"
          controls
          crossOrigin="anonymous"
        >
          {currentSource && (
            <source
              src={currentSource.qualities[selectedQuality] || currentSource.url}
              type={currentSource.type === 'hls' ? 'application/x-mpegURL' : 'video/mp4'}
            />
          )}
          {selectedSubtitle !== 'off' && currentSource?.subtitles?.find(sub => sub.language === selectedSubtitle) && (
            <track
              kind="subtitles"
              src={currentSource.subtitles.find(sub => sub.language === selectedSubtitle).url}
              srcLang={selectedSubtitle}
              label={selectedSubtitle.toUpperCase()}
              default
            />
          )}
        </video>
      </div>

      {/* Server Selection */}
      {episode && (
        <ServerSelector
          servers={episode.sources}
          selectedServer={selectedServer}
          onServerChange={setSelectedServer}
        />
      )}

      {/* Language & Quality Controls */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Audio Language</label>
            <select
              value={selectedAudio}
              onChange={(e) => setSelectedAudio(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
            >
              {currentSource?.languages?.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Subtitles</label>
            <SubtitleSelector
              subtitles={currentSource?.subtitles || []}
              selectedSubtitle={selectedSubtitle}
              onSubtitleChange={setSelectedSubtitle}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Quality</label>
            <select
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
            >
              {Object.keys(currentSource?.qualities || {}).map(quality => (
                <option key={quality} value={quality}>{quality}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Episode Navigation */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Episodes</h3>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {[...Array(12)].map((_, index) => (
            <button
              key={index}
              onClick={() => navigate(`/watch/${animeId}/ep${index + 1}`)}
              className={`bg-gray-700 hover:bg-gray-600 rounded px-3 py-2 text-sm ${
                episodeId === `ep${index + 1}` ? 'border-2 border-blue-500' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;