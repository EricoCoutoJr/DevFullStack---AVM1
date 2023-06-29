import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { rotas } from './Routers/Routers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={rotas} />
);
