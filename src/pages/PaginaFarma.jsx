import { AppContext } from '../App';
import { useContext } from 'react';
import { FormFarma } from '../components/FormFarma';
import { FarmaciasMap } from '../components/ListaInMap';

export const PaginaFarma = () => {
  const { setlistaFarma } = useContext(AppContext);

  const getDadosMed = () => {
    fetch(`http://localhost:3000/farma`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setListaMed(dados);
      })
      .catch(error => console.log(error));
  };
  // const farmacias = [];
  return (
    <div className="p-2 mx-4">
      <p className="fs-3">Farmácias</p>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link mx-2 active"
            id="nav-form-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-form"
            type="button"
            role="tab"
            aria-controls="nav-form"
            aria-selected="true"
          >
            Formulário de Farmácias
          </button>
          <button
            className="nav-link mx-2"
            id="nav-mapa-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-mapa"
            type="button"
            role="tab"
            aria-controls="nav-mapa"
            aria-selected="false"
          >
            Mapa das Farmácias
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {/* Div chamada do Formulário de Farmacia id="nav-form" */}
        <div
          className="tab-pane fade show active"
          id="nav-form"
          role="tabpanel"
          aria-labelledby="nav-form-tab"
          tabIndex="0"
        >
          <FormFarma />
        </div>
        {/* Div chamada do Mapa de Farmácias id="nav-map" */}
        <div
          className="tab-pane fade"
          id="nav-mapa"
          role="tabpanel"
          aria-labelledby="nav-mapa-tab"
          tabIndex="0"
        >
          <FarmaciasMap />
        </div>
      </div>
    </div>
  );
};
