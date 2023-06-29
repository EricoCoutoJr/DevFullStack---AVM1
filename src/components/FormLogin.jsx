import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { AppContext } from '../App';

export const FormLogin = () => {
  const { navigate, menu, setMenu } = useContext(AppContext);

  // Abaixo estão os elementos do useForm para serem usados nos inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Este onSubmit irá alterar o estado do menu para 'true'
  // e redicionará a pagina para a pagina de cadastro de farmácias

  const onSubmit = () => {
    setMenu(!menu);
    navigate('/farma');
  };

  return (
    <form
      className="p-5 mx-5 my-5 shadow bg-secondary-subtle border border-secondary-subtle rounded-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-3">
        <label htmlFor="InputEmail" className="form-label">
          Informe seu e-mail
        </label>
        {/* Neste input a entrada é obrigatório e o pattern
        funcionará como uma mascara tolerada para email */}
        <input
          type="email"
          className="form-control"
          id="InputEmail"
          aria-describedby="email"
          placeholder="nome-exemplo@exemplo.com.br"
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
      <div className="mb-3">
        <label htmlFor="InputPassword" className="form-label">
          Password
        </label>
        {/* Este input tem o requerimentoo obrigatório e tamanho mínimo de 8
        caracteres. Caso contrário retornará um mensagem de erro logo abaixo do input. */}
        <input
          type="password"
          className="form-control"
          id="InputPassword"
          {...register('password', { required: true, minLength: 8 })}
        />
        {errors.password && (
          <p className="text-danger fs-6 p-3">
            ⚠ Você deve informar a senha com no mínimo 8 caracteres.
          </p>
        )}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary me-md-2">
          Login
        </button>
      </div>
    </form>
  );
};
