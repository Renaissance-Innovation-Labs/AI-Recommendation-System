import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieGenreProvider = ({ children }) => {
  const [movieArr, setMovieArr] = useState([]);

  const addGenre = (genre) => {
    setMovieArr([...movieArr, genre]);
  };

  const removeGenre = (genre) => {
    const updatedArr = movieArr.filter((g) => g !== genre);
    setMovieArr(updatedArr);
  };

  return (
   
    <MovieContext.Provider value={{ movieArr, addGenre, removeGenre }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieGenre = () => {
  return useContext(MusicGenreContext);
};


export default MovieContext;
