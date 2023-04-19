import { useContext } from 'react';
import { AppContext } from '../App';
import { HeaderOn } from './HeaderOn';
import { HeaderOff } from './HeaderOff';

export const Header = () => {
  // Alterar o valor menu para true quando for validado o login
  const { menu } = useContext(AppContext);

  return menu ? <HeaderOn /> : <HeaderOff />;
};
