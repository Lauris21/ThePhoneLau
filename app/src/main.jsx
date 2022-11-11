import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './index.css';
import Carrito from './pages/Carrito';
import Loging from './pages/Loging';
import Pago from './pages/Pago';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/loging" element={<Loging />} />
          <Route path="/pago" element={<Pago />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
