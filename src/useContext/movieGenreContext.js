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

  const addGenreList = (genreList) => {
    setMovieArr([...movieArr, ...genreList]);
  }

  const setGenreList = (genreList) => {
    setMovieArr(genreList)
  }


  return (
   
    <MovieContext.Provider value={{ movieArr, addGenre, addGenreList, removeGenre, setGenreList }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieGenre = () => {
  return useContext(MovieContext);
};


export default MovieContext;
