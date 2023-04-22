import { useContext } from 'react';
import { AppContext } from '../App';
import { useForm } from 'react-hook-form';
import { GetGeoLocal } from '../models/geoLocal';

// ---------------------------------------------------
export const FormFarma = () => {
  const { postDados, geoLocal } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const getAddress = () => {
    // Obter os valores dos campos de endereço
    const { rua, numero, cidade, uf, cep } = getValues();

    // Retornar o endereço formatado como uma string
    return `street=${rua}+${numero}&city=${cidade}&state=${uf}&country=Brazil&postcode=${cep}`;
  };

  // Clocar aqui as ações após a saida do campo CEP
  function limpaFormulario() {
    setValue('rua', '');
    setValue('bairro', '');
    setValue('numero', '');
    setValue('cidade', '');
    setValue('uf', '');
  }
  const onBlur = data => {
    fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
      .then(res => res.json())
      .then(dadosViaCEP => {
        if (!dadosViaCEP.error) {
          setValue('rua', dadosViaCEP.logradouro);
          setValue('numero', dadosViaCEP.complemento);
          setValue('bairro', dadosViaCEP.bairro);
          setValue('cidade', dadosViaCEP.localidade);
          setValue('uf', dadosViaCEP.uf);
          GetGeoLocal(getAddress());
          console.log(geoLocal);
        } else {
          // CEP pesquisado não foi encontrado.
          limpaFormulario();
          alert('CEP não encontrado.');
        }
      });
  };
  //------------------------------------------------------

  // -----------------------------------------------------
  const onSubmit = data => {
    postDados('farma', data);
  };
  // -----------------------------------------------------

  return (
    <form
      className="p-3 mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="CnpjFarma" className="form-label">
            CNPJ
          </label>
          <input
            type="text"
            className="form-control"
            id="CnpjFarma"
            {...register('cnpj')}
          />
        </div>
        <div className=" col-9 mb-2">
          <label htmlFor="RSFarma" className="form-label">
            Razão Social
          </label>
          <input
            type="text"
            className="form-control"
            id="RSFarma"
            {...register('razaosocial')}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="NomeFarma" className="form-label">
            Nome Fantasia
          </label>
          <input
            type="text"
            className="form-control"
            id="NomeFarma"
            {...register('nomefantasia')}
          />
        </div>

        <div className="col-3">
          <label htmlFor="EmailFarma" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmailMed"
            aria-describedby="email"
            {...register('email')}
          />
        </div>

        <div className="col-3">
          <label htmlFor="FoneFarma" className="form-label">
            Telefone
          </label>
          <input
            type="text"
            className="form-control"
            id="FoneFarma"
            {...register('telefone')}
          />
        </div>

        <div className="col-3">
          <label htmlFor="CelFarma" className="form-label">
            Celular
          </label>
          <input
            type="text"
            className="form-control"
            id="CelFarma"
            {...register('celular')}
          />
        </div>
      </div>
      <div className="p-3 my-3 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
        <span className="fs-5">Endereço da Farmácia</span>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input
              type="text"
              className="form-control"
              id="cep"
              size="10"
              maxLength="9"
              defaultValue=""
              {...register('cep')}
              onBlur={handleSubmit(onBlur)}
            />

            <div id="CepFarma" className="form-text">
              Consulte o{' '}
              <a
                href="https://www2.correios.com.br/sistemas/buscacep/buscaCep.cfm"
                target="_blank"
                rel="noopener noreferrer"
              >
                CEP
              </a>
            </div>
          </div>
          <div className="col-7">
            <label htmlFor="rua" className="form-label">
              Logradouro
            </label>
            <input
              type="text"
              className="form-control"
              id="rua"
              {...register('rua')}
              disabled
            />
          </div>
          <div className="col-2">
            <label htmlFor="numero" className="form-label">
              Número
            </label>
            <input
              type="text"
              className="form-control"
              id="numero"
              {...register('numero')}
            />
          </div>
        </div>
        {/* ------------------------------ */}
        <div>
          <label htmlFor="complemento" className="form-label">
            Complemento
          </label>
          <input
            type="text"
            className="form-control"
            id="complemento"
            placeholder="Informe casa, loja ou unidade."
            {...register('complemento')}
          />
        </div>
        <div className="row my-3">
          <div className="col-4">
            <label htmlFor="bairro" className="form-label">
              Bairro
            </label>
            <input
              type="text"
              className="form-control"
              id="bairro"
              {...register('bairro')}
              disabled
            />
          </div>
          <div className="col-4">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              {...register('cidade')}
              disabled
            />
          </div>
          <div className="col-4">
            <label htmlFor="uf" className="form-label">
              Estado
            </label>
            <input
              type="text"
              className="form-control"
              id="uf"
              {...register('uf')}
              disabled
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <label htmlFor="lng" className="form-label">
              Longitude
            </label>
            <input
              type="numero"
              className="form-control"
              id="lng"
              {...register('lng')}
              disabled
            />
          </div>
          <div className="col-4">
            <label htmlFor="lat" className="form-label">
              Latitude
            </label>
            <input
              type="numero"
              className="form-control"
              id="lng"
              {...register('lat')}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary me-md-2">
          Inserir
        </button>
      </div>
    </form>
  );
};
