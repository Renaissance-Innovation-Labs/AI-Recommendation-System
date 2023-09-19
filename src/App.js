
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,

} from 'react-router-dom';


// Import your components
import Home from './pages/Home';
import About from './pages/About';
import MovieRecommendations from './pages/help/MovieRecommendations';
import GameRecommendations from './pages/help/GameRecommendations';
import SongRecommendations from './pages/help/SongRecommendations';
import NotFound from './pages/NotFound';


// Layouts
import RootLayout from './layouts/RootLayout';

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
      <Route path="MovieRecommendations" element={<MovieRecommendations />} />
      <Route path="GameRecommendations" element={<GameRecommendations />} />
      <Route path="SongRecommendations" element={<SongRecommendations/> } />
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
            {/* <GameRecommendationProvider> */}
              <MusicGenreProvider>
                <RouterProvider router={router} />
              </MusicGenreProvider>
            {/* </GameRecommendationProvider> */}
          </GameGenreProvider>
        </MovieGenreProvider>
    </>
  );
}

export default App;
