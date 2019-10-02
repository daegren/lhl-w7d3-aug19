import React from "react";

const PhotoListItem = ({ photo }) => {
  return (
    <li>
      <img src={photo.thumbnailUrl} alt={photo.title} />
    </li>
  );
};

export default PhotoListItem;
