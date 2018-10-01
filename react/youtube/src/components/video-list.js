import React from "react";
import VideoListItem from "./video-list-item";

const VideoList = (props) => {
  const videoItems =  props.videos.map((video, idx) => 
    <VideoListItem 
      key={video.etag} 
      video={video} 
      onVideoSelect={props.onVideoSelect}
      />
  );

  return (
    <ul className="col-md-12 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;