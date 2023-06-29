import { useContext } from 'react';
import { AppContext } from '../App';

export const PaginaSair = () => {
  const { navigate, menu, setMenu } = useContext(AppContext);
  setMenu(!menu);
  return navigate('/');
};
