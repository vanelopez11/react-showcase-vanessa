
import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  playing: boolean; 
  volume: number;
  playbackRate: number;
  onPlay: () => void;
  onPause: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  playing,
  volume,
  playbackRate,
  onPlay,
  onPause,
}) => {
  return (
    <ReactPlayer
      url={url}
      playing={playing}
      volume={volume}
      playbackRate={playbackRate}
      onPlay={onPlay}
      onPause={onPause}
      width="100%"
      height="auto"
    />
  );
};

export default VideoPlayer;
