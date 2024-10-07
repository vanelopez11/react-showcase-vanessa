
import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';


const App: React.FC = () => {
  const [videos, setVideos] = useState<string[]>(() => {
    const savedVideos = localStorage.getItem('videos');
    return savedVideos ? JSON.parse(savedVideos) : [];
  });
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [volume, setVolume] = useState<number>(1);
  console.log(setVolume)
  const [playbackRate, setPlaybackRate] = useState<number>(1);

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  const handleAddVideo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const url = form.videoUrl.value;
    if (url) {
      setVideos((prev) => [...prev, url]);
      form.videoUrl.value = '';
    }
  };

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  const handlePause = () => {
    setPlayingIndex(null);
  };

  const handleChangePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
  };

  return (
    <div className="App">
      <h1>Video Sync Player</h1>
      <form onSubmit={handleAddVideo}>
        <input type="text" name="videoUrl" placeholder="Enter YouTube URL" required />
        <button type="submit">Add Video</button>
      </form>
      <div>
        <label>Playback Speed:</label>
        <select value={playbackRate} onChange={(e) => handleChangePlaybackRate(Number(e.target.value))}>
          <option value={1}>1x</option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
        </select>
      </div>
      <div>
        {videos.map((url, index) => (
          <div key={index} className="video-container">
            <VideoPlayer
              url={url}
              playing={playingIndex === index}
              volume={volume}
              playbackRate={playbackRate}
              onPlay={() => handlePlay(index)}
              onPause={handlePause}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
