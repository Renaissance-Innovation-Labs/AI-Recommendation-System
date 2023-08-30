// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'

//Layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='Home' element={<Home />} />
      <Route path='About' element={<About />} />
    </Route>
  )
)


function App() {
  return (
      <RouterProvider router={router} />
   
  );
}

export default App;
