import { useContext } from 'react';
import { AppContext } from '../App';
import { Card } from './Card';

export const ListaCardsMed = () => {
  const { getDados, listaMed } = useContext(AppContext);

  // fornecendo o o caminho da lista no arquivo json
  const path = 'med';
  getDados(path);
  // return listaMed.forEach(medicamento => {
  //   // Enviar via props do Card o objeto 'medicamento'
  //   <div className="row">
  // Inserir no Card a props com os dados do medicamento
  console.log('abaixo a lista gerada no ListaMed');
  console.log(listaMed);
  return <Card listaCards={listaMed} />;
  //   </div>;
  // });
};
