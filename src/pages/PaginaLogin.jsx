import { FormLogin } from '../components/FormLogin';
import { useContext } from 'react';
import { AppContext } from '../App';

// Esta pagina também será chamada quando o usuário sair da aplicação.
// retornando ao modo inicial do menu.
export const PaginaLogin = () => {
  return <FormLogin />;
};
