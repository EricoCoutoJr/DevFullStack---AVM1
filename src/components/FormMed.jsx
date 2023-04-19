export const FormMed = () => {
  return (
    <form className="p-5 mx-5 my-5 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
      <div className="row mb-2">
        <div className="col-8">
          <label htmlFor="NomeMed" className="form-label">
            Medicamento
          </label>
          <input
            type="text"
            className="form-control"
            id="NomeMed"
            aria-describedby="email"
          />
          <div className="form-text">Informe o nome do medicamento.</div>
        </div>
        <div className=" col-4 mb-2">
          <label htmlFor="NomeLab" className="form-label">
            Laboratório
          </label>
          <input type="text" className="form-control" id="NomeLab" />
          <div className="form-text">Informe o nome do laboratório.</div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-6">
          <label htmlFor="DoseMed" className="form-label">
            Dosagem
          </label>
          <input
            type="text"
            className="form-control"
            id="DoseMed"
            aria-describedby="email"
          />
          <div className="form-text">Informe a dosagem do medicamento.</div>
        </div>
        <div className=" col-6 mb-2">
          <label htmlFor="DescLab" className="form-label">
            Descrição
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="DescLab"
            placeholder="Descreva o medicamento aqui..."
            rows="3"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-6">
          <label htmlFor="PrecoMed" className="dinheiro form-label">
            Preço
          </label>
          <div className="input-group">
            <span className="input-group-text">R$</span>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className="form-control"
              id="InputPrecoMed"
            />
          </div>
          <div className="form-text">Informe o preço do medicamento.</div>
        </div>
        <div className=" col-6 mb-2">
          <label htmlFor="TipoMed" className="form-label">
            Tipo do medicamento
          </label>
          <select velue="Selecione..." className="form-select" id="TipoMed">
            <option>Selecione...</option>
            <option>Medicamento Comum</option>
            <option>Medicamento Controlado</option>
          </select>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary me-md-2">
          Inserir
        </button>
        <button type="submit" className="btn btn-outline-primary">
          Limpar
        </button>
      </div>
    </form>
  );
};
