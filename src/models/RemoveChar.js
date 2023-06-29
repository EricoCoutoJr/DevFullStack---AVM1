export const removerAcentos = texto => {
  const comAcentos = 'ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç';
  const semAcentos = 'AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc';

  for (var i = 0; i < comAcentos.length; i++) {
    texto = texto.replace(comAcentos[i].toString(), semAcentos[i].toString());
  }
  return texto;
};
