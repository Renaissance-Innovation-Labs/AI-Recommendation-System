
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
import MovieRecommendations from './pages/help/MovieRecommendations';
import NotFound from './pages/NotFound';


// Layouts
import RootLayout from './layouts/RootLayout';

//useContext
import React, { useContext } from 'react';
import { MovieGenreProvider } from './useContext/movieGenreContext';
import { MusicGenreProvider } from './useContext/musicGenreContext';
import { GameGenreProvider } from './useContext/gameGenreContext';
import { SongRecommendationProvider } from './useContext/songRecommendationsContext';
import { GameRecommendationProvider } from './useContext/gameRecommendationsContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="MusicCategoryPage" element={<MusicCategoryPage />} />
      <Route path="GameCategoryPage" element={<GameCategoryPage />} />
      <Route path="MovieRecommendations" element={<MovieRecommendations />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
     {/* <MovieGenreProvider>
        <MusicGenreProvider>
          <GameGenreProvider>
            <MovieRecommendationProvider>
            <SongRecommendationProvider>
                <GameRecommendationProvider>
                <RouterProvider router={router} />
                </GameRecommendationProvider>
            </SongRecommendationProvider>
            </MovieRecommendationProvider>
          </GameGenreProvider>
        </MusicGenreProvider>
      </MovieGenreProvider> */}


      <MovieGenreProvider>
          <GameGenreProvider>
            <GameRecommendationProvider>
              <MusicGenreProvider>
                <SongRecommendationProvider>
                <RouterProvider router={router} />
                </SongRecommendationProvider>
              </MusicGenreProvider>
            </GameRecommendationProvider>
          </GameGenreProvider>
        </MovieGenreProvider>
    </>
  );
}

export default App;
