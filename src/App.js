// import logo from './logo.svg';
import './App.css';
// import SongRecommendations from './pages/help/SongRecommendations';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
// import SongRecommendations from './pages/help/SongRecommendations';
import NotFound from './pages/NotFound';

//Layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        {/* <Route index element={<RootLayout />} /> */}
      <Route path='home' element={<Home />} />
     
      <Route path='About' element={<About />} />

       <Route path='help' element={<HelpLayout />} >
        {/* <Route path='SongRecommendations' element={<SongRecommendations />} /> */}
      </Route>
     
      <Route path= "*" element={<NotFound />} />
    </Route>
  )
)


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
   
  );
}

export default App;
