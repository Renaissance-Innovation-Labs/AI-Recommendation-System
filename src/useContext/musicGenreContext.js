import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export const MusicGenreProvider = ({ children }) => {
  const [songArr, setSongArr] = useState([]);

  const addGenre = (genre) => {
    setSongArr([...songArr, genre]);
  };

  const removeGenre = (genre) => {
    const updatedArr = songArr.filter((g) => g !== genre);
    setSongArr(updatedArr);
  };

  const addGenreList = (genreList) => {
    setSongArr([...songArr, ...genreList]);
  }

  const setGenreList = (genreList) => {
    setSongArr(genreList)
  }


  return (
   
    <MusicContext.Provider value={{ songArr, addGenre, addGenreList, removeGenre, setGenreList }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicGenre = () => {
  return useContext(MusicContext);
};


export default MusicContext;
