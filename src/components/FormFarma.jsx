import '../models/getAdress.js';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// ---------------------------------------------------
export const FormFarma = () => {
  const [formState, setFormState] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Clocar aqui as ações após a saida do campo CEP
  const onBlur = data => {
    fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
      .then(res => res.json())
      .then(dadosViaCEP => {
        console.log(dadosViaCEP);
        setValue('rua', dadosViaCEP.logradouro);
        setValue('numero', dadosViaCEP.complemento);
        setValue('bairro', dadosViaCEP.bairro);
        setValue('cidade', dadosViaCEP.localidade);
        setValue('uf', dadosViaCEP.uf);
        console.log(data);
        getLonLat(data);
      })
      .catch(error =>
        console.error('Erro ao fazer solicitação à API de CEP.', error)
      );
  };

  // -----------------------------------------------------

  const getLonLat = data => {
    // Modelando a entrada da url para a API que retorna a Geolocalização do endereço.
    // street=<housenumber> <streetname>
    // city=<city>
    // county=<county>
    // state=<state>
    // country=<country>
    // postalcode=<postalcode>

    // Na linha referente a cidade foi efetuado um procedimento
    const address = {
      street: data.numero + ' ' + data.rua,
      city: data.cidade,
      state: data.uf,
      postalcode: data.cep,
      country: 'Brazil',
    };

    const queryString = Object.entries(address)
      .map(
        ([key, value]) =>
          `${key}=${encodeURIComponent(value).replace(/%20/g, '+')}`
      )
      .join('&');

    const baseUrl = 'https://geocode.maps.co/search';
    const url = `${baseUrl}?${queryString}`;

    fetch(url)
      .then(response => response.json())
      .then(dataGeo => {
        console.log(dataGeo);
        console.log(url);
      })
      .catch(error =>
        console.error('Erro ao fazer solicitação à API do GeoCODE.maps', error)
      );
  };

  // -----------------------------------------------------

  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormState(prevState => ({ ...prevState, [id]: value }));
  }

  return (
    <form className="p-3 mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
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
