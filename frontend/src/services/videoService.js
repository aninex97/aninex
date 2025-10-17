class VideoService {
  constructor() {
    this.supportedFormats = ['mp4', 'm3u8', 'mkv'];
  }

  // Get the best quality available from sources
  getBestQuality(sources) {
    const qualities = ['1080p', '720p', '480p'];
    for (const quality of qualities) {
      const hasQuality = sources.some(source => 
        source.qualities && source.qualities[quality]
      );
      if (hasQuality) return quality;
    }
    return '720p';
  }

  // Format time in seconds to MM:SS
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Calculate progress percentage
  getProgress(currentTime, duration) {
    return (currentTime / duration) * 100;
  }

  // Check if video format is supported
  isFormatSupported(url) {
    const extension = url.split('.').pop().toLowerCase();
    return this.supportedFormats.includes(extension);
  }

  // Get video thumbnail URL (placeholder)
  getThumbnailUrl(animeId, episodeId) {
    return `/thumbnails/${animeId}/episode-${episodeId}.jpg`;
  }
}

export const videoService = new VideoService();