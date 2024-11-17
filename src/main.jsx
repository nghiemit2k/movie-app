import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout.jsx'
const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />
      }
    ]
  }
], {
  future: {
    v7_partialHydration: true
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>,
)
