import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, VideoSelected }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        VideoSelected={VideoSelected}
        videos={video}
      />
    );
  });
  // const videoId = videos.map((video) => {
  //   return video;
  // });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
