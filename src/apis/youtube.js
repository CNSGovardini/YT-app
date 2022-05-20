import axios from "axios";

const KEY = "AIzaSyAA6rgdGQseJbO5HrrBiVjoe4w7f5ru5c4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
