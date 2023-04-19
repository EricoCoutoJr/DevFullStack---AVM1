import '../models/CepCheck.js';
import { useForm } from 'react-hook-form';
// import { readJson, writeJson } from '../models/JsonReadWrite.js';

export const FormFarma = () => {
  // Abaixo estão os elementos do useForm para serem usados nos inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };
  // const onSubmit = () => {
  //   const path = '../data/database.json';
  //   const dados = readJson(path);
  //   // É possivel enviar o 'data' como objeto que está com
  //   // todas as chaves e valores vindas do formulário

  //   dados.farma.push(data);
  //   writeJson(path, dados);
  // };

  return (
    <form
      className="p-3 mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="InputCnpjFarma" className="form-label">
            CNPJ
          </label>
          <input
            type="text"
            className="form-control"
            id="InputCnpjFarma"
            {...register('cnpj', {
              required: true,
              minLength: 14,
              maxLength: 14,
              pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
            })}
          />
          {errors.cnpj && (
            <p className="text-danger fs-6 p-3">⚠ CNPJ obrigatório.</p>
          )}
        </div>
        <div className=" col-9 mb-2">
          <label htmlFor="InputRSFarma" className="form-label">
            Razão Social
          </label>
          <input
            type="text"
            className="form-control"
            id="InputRSFarma"
            {...register('razaosocial', {
              required: true,
            })}
          />
          {errors.razaosocial && (
            <p className="text-danger fs-6 p-3">
              ⚠ Razão Social é obrigatório.
            </p>
          )}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="InputNomeFarma" className="form-label">
            Nome Fantasia
          </label>
          <input
            type="text"
            className="form-control"
            id="InputNomefarma"
            {...register('nome', {
              required: true,
            })}
          />
          {errors.nome && (
            <p className="text-danger fs-6 p-3">
              ⚠ Nome fantazia é obrigatório.
            </p>
          )}
        </div>

        <div className="col-3">
          <label htmlFor="InputEmailFarma" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmailMed"
            aria-describedby="email"
            {...register('email', {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && (
            <p className="text-danger fs-6 p-3">
              ⚠ Deve informar um e-mail de login.
            </p>
          )}
        </div>

        <div className="col-3">
          <label htmlFor="InputFoneFarma" className="form-label">
            Telefone
          </label>
          <input
            type="text"
            className="form-control"
            id="InputFoneMed"
            {...register('telefone', {
              pattern: /\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
            })}
          />
          {errors.telefone && (
            <p className="text-danger fs-6 p-3">
              ⚠ Deve informar o número do telefone. Ex. (48) 9999-9999
            </p>
          )}
        </div>

        <div className="col-3">
          <label htmlFor="InputCelFarma" className="form-label">
            Celular
          </label>
          <input
            type="text"
            className="form-control"
            id="InputCelFarma"
            {...register('celular', {
              required: true,
              pattern: /\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
            })}
          />
          {errors.celular && (
            <p className="text-danger fs-6 p-3">
              ⚠ Deve informar o número do celular. Ex. (48) 9999-9999
            </p>
          )}
        </div>
      </div>
      <div className="p-3 my-3 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
        <span className="fs-5">Endereço da Farmácia</span>
        <div className="row my-3">
          <div className="col-2">
            <label htmlFor="cep" className="form-label">
              CEP
            </label>
            <input
              type="text"
              className="form-control cep"
              id="cep"
              velue=""
              size="10"
              maxLength="9"
              {...register('cepID', {
                required: true,
                pattern: /(\d{5}\-\d{3})/,
              })}
            />
            {errors.cepID && (
              <p className="text-danger fs-6 p-3">⚠ Deve informar o CEP.</p>
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
          <div className="col-8">
            <label htmlFor="ruaID" className="form-label">
              Logradouro
            </label>
            <input
              type="text"
              className="form-control rua"
              id="rua"
              {...register('ruaID', {
                required: true,
              })}
            />
            {errors.ruaID && (
              <p className="text-danger fs-6 p-3">
                ⚠ Deve informar o nome da rua. O preenchimento é automático
                quando o CEP for informado.
              </p>
            )}
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
                pattern: /d{1,2,3,4,5,6,7}/,
              })}
            />
            {errors.numero && (
              <p className="text-danger fs-6 p-3">
                ⚠ Deve informar apenas o número da unidade.
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
            {...register('complemento', {
              pattern: /d{1,2,3,4,5,6,7}/,
            })}
          />
        </div>
        <div className="row my-3">
          <div className="col-4">
            <label htmlFor="bairroID" className="form-label">
              Bairro
            </label>
            <input
              type="text"
              className="form-control bairro"
              id="bairro"
              {...register('bairroID', {
                required: true,
              })}
            />
            {errors.bairroID && (
              <p className="text-danger fs-6 p-3">
                ⚠ Deve informar o nome do bairro. O preenchimento é automático
                quando o CEP for informado.
              </p>
            )}
          </div>
          <div className="col-4">
            <label htmlFor="cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              className="form-control cidade"
              id="cidade"
              {...register('cidadeID', {
                required: true,
              })}
            />
            {errors.cidadeID && (
              <p className="text-danger fs-6 p-3">
                ⚠ Deve informar o nome da cidade. O preenchimento é automático
                quando o CEP for informado.
              </p>
            )}
          </div>
          <div className="col-4">
            <label htmlFor="uf" className="form-label">
              Estado
            </label>
            <input
              type="text"
              className="form-control uf"
              id="uf"
              {...register('ufID', {
                required: true,
              })}
            />
            {errors.ufID && (
              <p className="text-danger fs-6 p-3">
                ⚠ Deve informar o nome do estado. O preenchimento é automático
                quando o CEP for informado.
              </p>
            )}
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
