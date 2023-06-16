import { useState, useEffect } from "react";

import { api } from "./Functions/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState('');

  useEffect(() => {
    if (!searchQuery) return;

    const getData = async () => {
      try {
        const apiData = await api(searchQuery,1);
        console.log(apiData.hits);
        setImages(apiData.hits);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  },[searchQuery])

  const submitForm = (query) => {
    if (query !== searchQuery) {
      setSearchQuery(query);
    }
  }
  
  return (
    <div>
      <SearchBar query={searchQuery} onFormSubmit={submitForm} />
      {images && <ImageGallery images={images} />}
    </div>
  );
};
