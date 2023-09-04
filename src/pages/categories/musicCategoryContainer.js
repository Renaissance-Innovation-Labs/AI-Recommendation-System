import React from 'react';
import { MusicGenreProvider } from '../../useContext/musicGenreContext.js';
import MusicCategoryComp from './MusicCategoryComp.js';

const MusicCategoryContainer = () => {
  return (
    <MusicGenreProvider>
      <MusicCategoryComp />
    </MusicGenreProvider>
  );
};

export default MusicCategoryContainer;
