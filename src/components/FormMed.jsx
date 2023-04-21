import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../App';

export const FormMed = () => {
  const { postDados } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    postDados('med', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 mx-5 my-5 shadow bg-secondary-subtle border border-secondary-subtle rounded-3"
    >
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
            {...register('nomeMed', { required: true })}
          />
          {errors.nomeMed && (
            <p className="text-danger fs-6 p-3">
              ⚠ Você deve informar o nome do medicamento.
            </p>
          )}
        </div>
        <div className=" col-4 mb-2">
          <label htmlFor="NomeLab" className="form-label">
            Laboratório
          </label>
          <input
            type="text"
            className="form-control"
            id="NomeLab"
            {...register('nomeLab', { required: true })}
          />
          {errors.nomeLab && (
            <p className="text-danger fs-6 p-3">
              ⚠ Você deve informar o nome do laboratório.
            </p>
          )}
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
            {...register('doseMed', { required: true })}
          />
          {errors.doseMed && (
            <p className="text-danger fs-6 p-3">
              ⚠ Você deve indformar a dose do medicamento.
            </p>
          )}
        </div>
        <div className=" col-6 mb-2">
          <label htmlFor="DescLab" className="form-label">
            Descrição
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="DescMed"
            placeholder="Descreva o medicamento aqui..."
            rows="3"
            {...register('descMed', { required: false })}
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
              id="PrecoMed"
              {...register('precoMed', { required: true })}
            />
            {errors.precoMed && (
              <p className="text-danger fs-6 p-3">
                ⚠ Você deve informar preço do medicamento.
              </p>
            )}
          </div>
        </div>
        <div className=" col-6 mb-2">
          <label htmlFor="TipoMed" className="form-label">
            Tipo do medicamento
          </label>
          <select
            velue="Selecione..."
            className="form-select"
            id="TipoMed"
            {...register('tipoMed', { required: true, pattern: /[1, 2]/ })}
          >
            <option value="">Selecione...</option>
            <option value="1">Medicamento Comum</option>
            <option value="2">Medicamento Controlado</option>
          </select>
          {errors.precoMed && (
            <p className="text-danger fs-6 p-3">
              ⚠ Selecione o tipo de medicamento.
            </p>
          )}
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary me-md-2">
          Inserir
        </button>
        <button type="onClick" className="btn btn-outline-primary">
          Limpar
        </button>
      </div>
    </form>
  );
};
