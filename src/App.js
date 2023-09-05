
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,

} from 'react-router-dom';


// Import your components
import Home from './pages/Home';
import About from './pages/About';
import MusicCategoryPage from './pages/categories/MusicCategoryPage';
import GameCategoryPage from './pages/categories/GameCategoryPage';
import MovieCategoryPage from './pages/categories/MovieCategoryPage';
// import SongRecommendations from './pages/help/SongRecommendations';
// import GameRecommendations from './pages/help/GameRecommendations';
import MovieRecommendations from './pages/help/MovieRecommendations.js';
import NotFound from './pages/NotFound';


// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
// import MusicCategoriesLayout from './layouts/MusicCategoryLayout'

//useContext
import React, { useContext } from 'react';
import { MovieGenreProvider } from './useContext/movieGenreContext';
import { MusicGenreProvider } from './useContext/musicGenreContext';
import { GameGenreProvider } from './useContext/gameGenreContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="MusicCategoryPage" element={<MusicCategoryPage />} />
      <Route path="GameCategoryPage" element={<GameCategoryPage />} />
      <Route path="MovieCategoryPage" element={<MovieCategoryPage />} />



      <Route path="help" element={<HelpLayout />}>
        {/* <Route path="SongRecommendations" element={<SongRecommendations />} /> */}
        {/* <Route path="GameRecommendations" element={<GameRecommendations />} /> */}
        <Route path="MovieRecommendations" element={<MovieRecommendations />} />
      </Route>


      {/* <Route path="musicCategories" element={<MusicCategoriesLayout />}>
        <Route path="SongRecommendations" element={<SongRecommendations />} />
      </Route> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <MovieGenreProvider>
        <MusicGenreProvider>
          <GameGenreProvider>
          <RouterProvider router={router} />
          </GameGenreProvider>
        </MusicGenreProvider>
      </MovieGenreProvider>
    </>
  );
}

export default App;
