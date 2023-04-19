import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PaginaLogin } from './pages/PaginaLogin';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState, createContext } from 'react';

export const AppContext = createContext();

export const App = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  // // Inserir abaixo funções e variáveis utilizadas por todo o Appharma
  const valoresVF = { navigate, menu, setMenu };

  return (
    <AppContext.Provider value={valoresVF}>
      {menu ? (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <div>
          <Header />
          <PaginaLogin />
          <Footer />
        </div>
      )}
    </AppContext.Provider>
  );
};
