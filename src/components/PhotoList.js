import React from "react";
import PhotoListItem from "./PhotoListItem";
import "./PhotoList.css";

const PhotoList = ({ photos, selectedAlbum }) => {
  if (!selectedAlbum) {
    return <div>Please select an album</div>;
  } else {
    return (
      <div className="photo-list">
        <h2>Photos for Album {selectedAlbum.title}</h2>
        <ul>
          {photos.map(photo => (
            <PhotoListItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
    );
  }
};

export default PhotoList;
