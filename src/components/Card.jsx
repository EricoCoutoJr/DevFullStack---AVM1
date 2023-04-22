export const Card = props => {
  return (
    <div>
      {/* Aqui a montagem do card. O carde já é o botão para acionar o modal */}
      <div
        className="card mx-3 my-2"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
        style={{ width: 18 + `rem` }}
      >
        {/* Aqui vou colocar uma dispositivo para decidir qual imagem colocar. */}
        {/* em função do tipo de medicamento */}
        <img
          src="../src/assets/medicamento-tarja-vermelha-300x300.png"
          className="card-img-top"
          alt="Medicamento"
        />
        <div className="card-body">
          <h5 className="card-title">{props.nomeMed}</h5>
          <h6 className="fs-6">{props.nomeLab}</h6>
          <h6 className="fs-6">{props.tipoMed}</h6>
          <h6 className="fs-6">{props.precoMed}</h6>
        </div>
      </div>
      {/* Abaixo vai o modal do card */}
      <div>
        <div
          className="modal fade"
          id="Modal"
          tabindex="-1"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="ModalLabel">
                  Colocar aqui a props do nomeMed
                  {props.descMed}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Colocar aqui a props de descMed</div>
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
  );
};
