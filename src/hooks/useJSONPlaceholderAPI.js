import { useState, useEffect } from "react";

const useJSONPlaceholderAPI = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/albums").then(res =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/photos").then(res =>
        res.json()
      )
    ]).then(([albums, photos]) => {
      setAlbums(albums);
      setPhotos(photos);
    });
  }, []);

  return {
    albums,
    photos,
    selectedAlbum,
    setSelectedAlbum
  };
};

export default useJSONPlaceholderAPI;
