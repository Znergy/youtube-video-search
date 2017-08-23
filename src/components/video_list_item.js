import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li className="list-group-item" onClick={() => onVideoSelect(video)}>
          <div className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={imageUrl} />
              </div>

              <div className="media-body">
                  <div className="media-heading">
                      {video.snippet.title}
                  </div>
              </div>
          </div>
      </li>
    );
};

export default VideoListItem;


/**** Notes ****/
// const video = props.video;
// const onVideoSelect = props.onVideoSelect;
// saying ({ video, onVideoSelect }) sets the properties w/o the above line (cool!!)