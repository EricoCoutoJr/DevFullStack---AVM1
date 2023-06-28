import { useForm } from 'react-hook-form';

// ---------------------------------------------------
export const FormFarma = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  // ------------------------------------------------------

  // ------------------------------------------------------

  // Clocar aqui as ações após a saida do campo CEP Inválido
  function limpaFormulario() {
    setValue('rua', '');
    setValue('bairro', '');
    setValue('numero', '');
    setValue('cidade', '');
    setValue('uf', '');
    setValue('cep', '');
    setValue('lat', '');
    setValue('lng', '');
  }
  // ------------------------------------------------------
  const getGeolocal = async address => {
    if( !(address == ' undefined,undefined,undefined,undefined,,Brasil')) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${address}&limit=1`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        setValue('lat', latitude);
        setValue('lng', longitude);
        return true;
      } else {
        console.log('dados não recebidos....');
      }
    }
    }
  };
  // ------------------------------------------------------

  const onBlur = async () => {
    if (getValues('cep')) {
      const url = `https://viacep.com.br/ws/${getValues('cep')}/json/`
      const response = await fetch(url)
      const dados = await response.json()
        if (!dados.hasOwnProperty('erro')) {
          setValue('rua', dados.logradouro);
          setValue('bairro', dados.bairro);
          setValue('cidade', dados.localidade);
          setValue('uf', dados.uf);
        } else {
          console.log('CEP não encontrado....');
        }
    } 
  };
  // -----------------------------------------------------

function latlon() {
    const address =
    getValues('numero') +
    ' ' +
    getValues('rua') +
    ',' +
    getValues('bairro') +
    ',' +
    getValues('cidade') +
    ',' +
    getValues('uf') +
    ',' +
    getValues('cep') +
    ',Brasil';
    if (!(address == " undefined,undefined,undefined,undefined,,Brasil")) {
      getGeolocal(address)
    };
};
  // -----------------------------------------------------

  const handleLimpaData = () => {
    setValue('cnpj', '');
    setValue('razaosocial', '');
    setValue('nomefantasia', '');
    setValue('email', '');
    setValue('telefone', '');
    setValue('celular', '');
    setValue('cep', '');
    setValue('rua', '');
    setValue('numero', '');
    setValue('complemento', '');
    setValue('cidade', '');
    setValue('bairro', '');
    setValue('uf', '');
    setValue('lat', '');
    setValue('lng', '');
  };

  // ------------------------------------------------------

  const postDados = async dados => {
    await fetch(`http://localhost:3000/farma`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(dados),
    })
      .then(() => console.log('enviado com sucesso'))
      .catch(error => console.log(error));
  };

  //-------------------------------------------------------

  const onSubmit = data => {
    postDados(data);
    handleLimpaData();
  };

  // ------------------------------------------------------

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
            {...register('cnpj', {
              required: true,
              maxLength: 14,
              minLength: 14,
              pattern: /[0-9]/,
            })}
          />
          {errors.cnpj && (
            <p className="text-danger fs-6 p-3">
              ⚠ Deve ser informado CNPJ apenas com números.
            </p>
          )}
        </div>
        <div className=" col-9 mb-2">
          <label htmlFor="RSFarma" className="form-label">
            Razão Social
          </label>
          <input
            type="text"
            className="form-control"
            id="RSFarma"
            {...register('razaosocial', { required: true })}
          />
          {errors.razaosocial && (
            <p className="text-danger fs-6 p-3">⚠ Campo obrigatório.</p>
          )}
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
            {...register('nomefantasia', { required: true })}
          />
          {errors.nomefantasia && (
            <p className="text-danger fs-6 p-3">⚠ Campo obrigatório.</p>
          )}
        </div>

        <div className="col-3">
          <label htmlFor="EmailFarma" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="EmailFarma"
            aria-describedby="email"
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
          {errors.email && (
            <p className="text-danger fs-6 p-3">⚠ Campo obrigatório.</p>
          )}
        </div>

        <div className="col-3">
          <label htmlFor="FoneFarma" className="form-label">
            Telefone
          </label>
          <input
            type="text"
            className="form-control"
            id="FoneFarma"
            {...register('telefone', {
              pattern:
                /^(([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
            })}
          />
          {errors.telefone && (
            <p className="text-danger fs-6 p-3">
              ⚠ Preencha corretamente o numero de telefone com DDD.
            </p>
          )}
        </div>

        <div className="col-3">
          <label htmlFor="CelFarma" className="form-label">
            Celular
          </label>
          <input
            type="text"
            className="form-control"
            id="CelFarma"
            {...register('celular', {
              required: true,
              pattern:
                /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
            })}
          />
          {errors.celular && (
            <p className="text-danger fs-6 p-3">
              ⚠ Preencha corretamente o numero de telefone.
            </p>
          )}
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
              // defaultValue=""
              {...register('cep', {
                required: true
              })}
              onBlur={handleSubmit(onBlur())}
            />
            {errors.cep && (
              <p className="text-danger fs-6 p-3">
                ⚠ Preencha o CEP apenas com números.
              </p>
            )}
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
              {...register('numero', {
                required: true,
                pattern: /[0-9]/,
              })}
              onBlur={handleSubmit(latlon())}
            />
            {errors.numero && (
              <p className="text-danger fs-6 p-3">
                ⚠ Informe apenas o número do local.
              </p>
            )}
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
              //  - será implementada quando a API de geolocalização
              // estiver disponível e operacional
            />
            {errors.lng && (
              <p className="text-danger fs-6 p-3">⚠ Campo obrigatório.</p>
            )}
          </div>
          <div className="col-4">
            <label htmlFor="lat" className="form-label">
              Latitude
            </label>
            <input
              type="numero"
              className="form-control"
              id="lat"
              {...register('lat')}
              disabled
              // - será implementada quando a API de geolocalização
              // estiver disponível e operacional
            />
            {errors.lat && (
              <p className="text-danger fs-6 p-3">⚠ Campo obrigatório.</p>
            )}
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="button"
          onClick={handleLimpaData}
          className="btn btn-primary me-md-2"
        >
          Limpar
        </button>
        <button type="submit" className="btn btn-primary me-md-2">
          Inserir
        </button>
      </div>
    </form>
  );
};
