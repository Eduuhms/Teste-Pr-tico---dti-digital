const { calcularMelhorPetshop } = require('../services/calculadora');

describe('calcularMelhorPetshop', () => {
  test('Petshop mais barato em um dia útil', () => {
    const resultado = calcularMelhorPetshop('02/08/2024', 2, 3); // sexta-feira

    expect(resultado.nome).toBe('Meu Canino Feliz');
    expect(resultado.precoTotal).toBe(2 * 20 + 3 * 40); 
  });

  test('Petshop mais barato no fim de semana', () => {
    const resultado = calcularMelhorPetshop('04/08/2024', 1, 1); // domingo

    expect(resultado.nome).toBe('Meu Canino Feliz');
    expect(resultado.precoTotal).toBeCloseTo(24 + 48); 
  });

  test('Desempate por distância', () => {
    const resultado = calcularMelhorPetshop('04/08/2024', 1, 2); 

    expect(resultado.nome).toBe('ChowChawgas'); // mesmo preço que "Meu Canino Feliz"
    expect(resultado.precoTotal).toBe(30 + 2 * 45); 
  });
});
