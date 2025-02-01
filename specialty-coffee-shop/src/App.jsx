import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.sass'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Root from './Root'
import Blog from './pages/Blog'
import Coffee from './pages/Coffee'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Post from './pages/Post'

function App() {

  const viewportHeight = window.innerHeight;
  // speichert der Viewport-Breite in der Variable "viewport"
  const [viewport, setViewport] = useState(window.innerWidth);
  // speichert den Viewport-Height in der Variable "viewportHeight"

  
// setzt die Variable "viewport" wenn die Seite geladen wird
  window.addEventListener("load", () => {
    setViewport(window.innerWidth);
  });

// aktualisiert die Variable "viewport" falls die Fenstergröße geändert wird
  window.addEventListener("resize", () => {
    setViewport(window.innerWidth);
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root viewport = {viewport}/>,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home viewport={viewport}/>,
          errorElement: <NotFound />
    },
    {
      path:'/about', 
      element: <About viewport={viewport}/>,
      errorElement: <NotFound />
    },
    {
      path:'/blog',
      element: <Blog viewport={viewport}/>,
      errorElement: <NotFound />
    },
    {
      path:'/coffee',
      element: <Coffee viewport={viewport}/>,
      errorElement: <NotFound />
    },
    {
      path:'/contact',
      element: <Contact viewport={viewport}/>,
      errorElement: <NotFound />
    },
    {
      path:'/impressum',
      element: <Impressum viewport={viewport}/>,
      errorElement: <NotFound />
    },
    {
      path:'/post/:slug',
      element: <Post viewport={viewport}/>,
      errorElement: <NotFound />
    },
    ]
  }
  ])
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
