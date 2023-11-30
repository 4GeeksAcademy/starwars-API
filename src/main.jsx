import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FavoritesWrapper } from './Favorites.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesWrapper>
      <App />
    </FavoritesWrapper>
  </React.StrictMode>,
)
