export const Card = props => {
  return (
    <div>
      <div className="card mx-3 my-2" style={{ width: 18 + `rem` }}>
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
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#Modal"
          >
            Descrição do Medicamento
          </button>
        </div>
      </div>
      {/* Abaixo vai o modal do card */}
      <div>
        <div
          class="modal fade"
          id="Modal"
          tabindex="-1"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="ModalLabel">
                  Colocar aqui a props do nomeMed
                  {props.descMed}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Colocar aqui a props de descMed</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
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
