import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/style.css";
import "./styles/style-2.scss";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);