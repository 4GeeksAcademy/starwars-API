import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FavoritesWrapper } from './Favorites.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LearnMore from './components/LearnMore.jsx';
import SWNav from './components/SWNav.jsx';

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/learnmore',
    element: <LearnMore />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesWrapper>
      <SWNav />
      <RouterProvider router={router} />
    </FavoritesWrapper>
  </React.StrictMode>,
)
