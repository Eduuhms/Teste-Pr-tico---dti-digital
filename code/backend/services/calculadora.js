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
      precoTotal: precoTotal, 
      distancia: petshop.distancia 
    };
  });

  resultados.sort((a, b) => {
    if (a.precoTotal === b.precoTotal) {
      return a.distancia - b.distancia; 
    }
    return a.precoTotal - b.precoTotal;
  });

  const melhorPetshop = resultados[0];
  return {
    nome: melhorPetshop.nome,
    precoTotal: "R$ " + melhorPetshop.precoTotal,
    distancia: melhorPetshop.distancia + " Km"
  }; 
}

module.exports = { calcularMelhorPetshop };
