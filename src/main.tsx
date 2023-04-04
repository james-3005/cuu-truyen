import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import DetailPage from './components/detail/DetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'detail/:id',
        element: <DetailPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
