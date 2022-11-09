import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './index.css';
import Carrito from './pages/Carrito';
import Login from './pages/Loging';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
