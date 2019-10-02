import React from "react";

const AlbumsList = ({ albums, onSelectedAlbum }) => {
  return (
    <ul className="album-list">
      {albums.map(album => (
        <li key={album.id} onClick={() => onSelectedAlbum(album)}>
          {album.title}
        </li>
      ))}
    </ul>
  );
};

export default AlbumsList;
