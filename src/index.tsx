import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './components/Navigation';
import Home from './components/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Navigation />
    <Home />
  </React.StrictMode>
);
