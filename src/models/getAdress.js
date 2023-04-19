import axios from 'axios';

export function FormularioCEP() {
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  function limpaFormulario() {
    setRua('');
    setBairro('');
    setCidade('');
    setUf('');
  }

  async function handleCepBlur(cep) {
    // Nova variável "cep" somente com dígitos.
    const cepDigitos = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cepDigitos !== '') {
      // Expressão regular para validar o CEP.
      const validaCep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validaCep.test(cepDigitos)) {
        // Preenche os campos com "..." enquanto consulta a API.
        setRua('#..');
        setBairro('#..');
        setCidade('#..');
        setUf('#..');

        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cepDigitos}/json/`
          );

          if (!response.data.erro) {
            // Atualiza os campos com os valores da consulta.
            setRua(response.data.logradouro);
            setBairro(response.data.bairro);
            setCidade(response.data.localidade);
            setUf(response.data.uf);
            return { rua: rua, bairro: bairro, cidade: cidade, uf: uf };
          } else {
            // CEP pesquisado não foi encontrado.
            limpaFormulario();
            alert('CEP não encontrado.');
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        // CEP é inválido.
        limpaFormulario();
        alert('Formato de CEP inválido.');
      }
    } else {
      // CEP sem valor, limpa formulário.
      limpaFormulario();
    }
  }
}
