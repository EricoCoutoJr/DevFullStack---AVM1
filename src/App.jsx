import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PaginaLogin } from './pages/PaginaLogin';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState, createContext } from 'react';
import { getDados, postDados } from './models/JsonReadWrite';

export const AppContext = createContext();

export const App = () => {
  const [menu, setMenu] = useState(false);
  const [listaMed, setListaMed] = useState([]);
  const [listaFarma, setListaFarma] = useState([]);
  const [geoLocal, setGeoLocal] = useState({});
  const navigate = useNavigate();

  // // Inserir abaixo funções e variáveis utilizadas por todo o Appharma
  const valoresVF = {
    navigate,
    menu,
    setMenu,
    getDados,
    postDados,
    listaMed,
    setListaMed,
    listaFarma,
    setListaFarma,
    geoLocal,
    setGeoLocal,
  };

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
