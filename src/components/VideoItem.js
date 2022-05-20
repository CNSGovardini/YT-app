import "./VideoItem.css";
import React from "react";

const VideoItem = ({ videos, VideoSelected }) => {
  return (
    <div onClick={() => VideoSelected(videos)} className="video-item item">
      <img
        alt={videos.snippet.title}
        className="ui image"
        src={videos.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header description">{videos.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
