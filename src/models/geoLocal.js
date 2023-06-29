// Função para buscar a geolocalização de um endereço completo
export const getGeolocal = async enderecoCompleto => {
  try {
    // URL da API do Nominatim do OpenStreetMap
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
      enderecoCompleto
    )}&limit=1`;

    // Fazendo a requisição para a API
    const response = await fetch(url);

    // Verifica se a resposta da API foi bem-sucedida
    if (response.ok) {
      // Extrai os dados da resposta em formato JSON
      const data = await response.json();

      // Verifica se os dados retornados contêm pelo menos um resultado
      if (data.length > 0) {
        // Obtendo a latitude e longitude do resultado
        const latitude = data[0].lat;
        const longitude = data[0].lon;

        // Retorna um objeto contendo a latitude e longitude
        return [latitude, longitude];
      } else {
        throw new Error('Endereço não encontrado.');
      }
    } else {
      throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao obter geolocalização:', error);
  }
};
