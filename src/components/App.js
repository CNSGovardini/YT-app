import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail.js";
import useVideos from "../hooks/useVideos.js";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");
  // console.log("Hi there", video);
  // const response = async (video) => {
  //   console.log(video);
  // };
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  return (
    <div className="ui container">
      <SearchBar whenSubmitted={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList VideoSelected={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
