import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';

import { PaginaFarma } from '../pages/PaginaFarma';
import { PaginaMed } from '../pages/PaginaMed';
import { PaginaSobre } from '../pages/PaginaSobre';
import { PaginaErro } from '../pages/PaginaErro';
import { PaginaSair } from '../pages/PaginaSair';

export const rotas = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: '/med',
        element: <PaginaMed />,
      },
      {
        path: '/farma',
        element: <PaginaFarma />,
      },
      {
        path: '/sobre',
        element: <PaginaSobre />,
      },
      {
        path: '/sair',
        element: <PaginaSair />,
      },
    ],
  },
]);
