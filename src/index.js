import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MealProvider } from './store/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MealProvider>
    <App />
  </MealProvider>
);
