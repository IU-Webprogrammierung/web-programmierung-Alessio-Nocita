import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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

  // setzt die Variable "viewport" wenn die Seite geladen wird
  const [viewport, setViewport] = useState(window.innerWidth);

  window.addEventListener("load", () => {
    setViewport(window.innerWidth);
  });

// aktualisiert die Variable "viewport" falls die Fenstergröße geändert wird
  window.addEventListener("resize", () => {
    setViewport(window.innerWidth);
  });

  
  // erstellt die Router-Konfiguration für alle Seiten

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
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
    {
      path: '*',
      element: <NotFound />
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
