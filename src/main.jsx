import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/movie/:id',
    element: <MovieDetail />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>,
)
