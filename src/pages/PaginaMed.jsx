import { FormMed } from '../components/FormMed';
import { ListaCardsMed } from '../components/ListaCardsMed';
import { AppContext } from '../App';
import { useContext } from 'react';

export const PaginaMed = () => {
  const { setListaMed } = useContext(AppContext);

  const getDadosMed = () => {
    fetch(`http://localhost:3000/med`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
    })
      .then(resposta => resposta.json())
      .then(dados => {
        setListaMed(dados);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="p-2 mx-2">
      <p className="fs-3">Medicamentos</p>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-form-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-form"
            type="button"
            role="tab"
            aria-controls="nav-form"
            aria-selected="true"
          >
            Formulário de Medicamentos
          </button>
          <button
            className="nav-link"
            id="nav-lista-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-lista"
            type="button"
            role="tab"
            aria-controls="nav-lista"
            aria-selected="false"
            onClick={getDadosMed}
          >
            Lista de Medicamentos
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {/* Div do chamado do formulário de medicamentos id="nav-form"*/}
        <div
          className="tab-pane fade show active"
          id="nav-form"
          role="tabpanel"
          aria-labelledby="nav-form-tab"
          tabIndex="0"
        >
          <FormMed />
        </div>
        {/* Div da lista de cards de medicamentos id="nav-lista"*/}
        <div
          className="tab-pane fade"
          id="nav-lista"
          role="tabpanel"
          aria-labelledby="nav-lista-tab"
          tabIndex="0"
        >
          {/* Inserir aqui o módulo de lista de cards */}
          <ListaCardsMed />
          {/* Inserir aqui o módulo de lista de cards de medicamento */}
        </div>
      </div>
    </div>
  );
};
