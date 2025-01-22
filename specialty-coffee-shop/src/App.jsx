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
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Post from './pages/Post'




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <NotFound />
    },
    {
      path:'/about', 
      element: <About />
    },
    {
      path:'/blog',
      element: <Blog />
    },
    {
      path:'/shop',
      element: <Shop />
    },
    {
      path:'/contact',
      element: <Contact />
    },
    {
      path:'/impressum',
      element: <Impressum />
    },
    {
      path:'/post/:slug',
      element: <Post />
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
