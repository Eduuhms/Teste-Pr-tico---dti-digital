const petshops = require('../consts/petshops');
const { ehFimDeSemana } = require('../utils/utils');

function calcularMelhorPetshop(dataString, pequenos, grandes) {
  const fimDeSemana = ehFimDeSemana(dataString);

  const resultados = petshops.map(petshop => {
    const tipoPreco = fimDeSemana ? 'fimDeSemana' : 'semana';

    const precoTotal = 
      pequenos * petshop.preco[tipoPreco].pequeno +
      grandes * petshop.preco[tipoPreco].grande;

    return {
      nome: petshop.nome,
      precoTotal: "R$ " + precoTotal,
      distancia: petshop.distancia + " Km"
    };
  });

  resultados.sort((a, b) => {
    if (a.precoTotal === b.precoTotal) {
      return a.distancia - b.distancia; 
    }
    return a.precoTotal - b.precoTotal;
  });

  return resultados[0]; 
}

module.exports = { calcularMelhorPetshop };
