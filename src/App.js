
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,

} from 'react-router-dom';


// Import your components
import Home from './pages/Home';
import About from './pages/About';
import SongRecommendations from './pages/help/SongRecommendations';
import GameRecommendations from './pages/help/GameRecommendations';
import MovieRecommendations from './pages/help/MovieRecommendations.js';
import NotFound from './pages/NotFound';


// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

import React, { useContext } from 'react';
import { MovieGenreProvider } from './useContext/movieGenreContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="home" element={<Home />} />
      <Route path="About" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="SongRecommendations" element={<SongRecommendations />} />
        <Route path="GameRecommendations" element={<GameRecommendations />} />
        <Route path="MovieRecommendations" element={<MovieRecommendations />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
     <MovieGenreProvider>
        <RouterProvider router={router} />
      </MovieGenreProvider>
    </>
  );
}

export default App;
