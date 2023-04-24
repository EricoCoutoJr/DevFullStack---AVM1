import { useContext } from 'react';
import { AppContext } from '../App';

export const ListaCardsMed = () => {
  const { listaMed } = useContext(AppContext);

  return (
    <div className="row">
      {listaMed.map(med => (
        <div className="col-3" key={med.id}>
          <div
            className="card mx-1 my-2"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={'#Modal' + med.id}
            style={{ width: `auto` }}
          >
            {/* Aqui vou colocar uma dispositivo para decidir qual imagem colocar. */}
            {/* em função do tipo de medicamento */}

            {med.tipoMed === '1' ? (
              <img
                src="../src/assets/medicamento-tarja-vermelha-300x300.png"
                className="card-img-top"
                alt="Medicamento"
                style={{ width: `auto` }}
              />
            ) : (
              <img
                src="../src/assets/medicamento-tarja-preta-300x300.png"
                className="card-img-top"
                alt="Medicamento"
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{med.nomeMed}</h5>
              <h6 className="fs-6">{med.nomeLab}</h6>
              <h6 className="fs-6">{med.descMed}</h6>
              <h6 className="fs-6">
                {med.tipoMed === '1' ? `Não Controlado` : `Controlado`}
              </h6>
              <h6 className="fs-6">{med.precoMed}</h6>
            </div>
          </div>
          {/* Abaixo vai o modal do card */}
          <div>
            <div
              className="modal fade"
              id={'Modal' + med.id}
              tabIndex="-1"
              aria-labelledby="ModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-4" id="ModalLabel">
                      {med.nomeMed}
                    </h1>
                  </div>
                  <div className="modal-body">{med.descMed}</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
