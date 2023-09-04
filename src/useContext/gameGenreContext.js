import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameGenreProvider = ({ children }) => {
  const [gameArr, setGameArr] = useState([]);

  const addGenre = (genre) => {
    setGameArr([...gameArr, genre]);
  };

  const removeGenre = (genre) => {
    const updatedArr = gameArr.filter((g) => g !== genre);
    setGameArr(updatedArr);
  };

  const addGenreList = (genreList) => {
    setGameArr([...gameArr, ...genreList]);
  }

  const setGenreList = (genreList) => {
    setGameArr(genreList)
  }


  return (
   
    <GameContext.Provider value={{ gameArr, addGenre, addGenreList, removeGenre, setGenreList }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameGenre = () => {
  return useContext(GameContext);
};


export default GameContext;
