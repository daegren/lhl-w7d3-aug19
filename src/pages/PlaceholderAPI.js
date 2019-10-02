import React from "react";
import useJSONPlaceholderAPI from "../hooks/useJSONPlaceholderAPI";
import PhotoList from "../components/PhotoList";
import AlbumsList from "../components/AlbumsList";
import "./PlaceholderAPI.css";

const PlaceholderAPI = () => {
  const {
    albums,
    photos,
    selectedAlbum,
    setSelectedAlbum
  } = useJSONPlaceholderAPI();

  const filteredPhotos = selectedAlbum
    ? photos.filter(photo => photo.albumId === selectedAlbum.id)
    : [];

  return (
    <div className="placeholder-api">
      <AlbumsList
        albums={albums}
        selectedAlbumId={selectedAlbum}
        onSelectedAlbum={id => setSelectedAlbum(id)}
      />
      <PhotoList photos={filteredPhotos} selectedAlbum={selectedAlbum} />
    </div>
  );
};

export default PlaceholderAPI;
