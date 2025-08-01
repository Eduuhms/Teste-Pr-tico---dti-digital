const petshops = [
  {
    nome: 'Meu Canino Feliz',
    distancia: 2.0,
    preco: {
      semana: { pequeno: 20, grande: 40 },
      fimDeSemana: { pequeno: 20 * 1.2, grande: 40 * 1.2 }
    }
  },
  {
    nome: 'Vai Rex',
    distancia: 1.7,
    preco: {
      semana: { pequeno: 15, grande: 50 },
      fimDeSemana: { pequeno: 20, grande: 55 }
    }
  },
  {
    nome: 'ChowChawgas',
    distancia: 0.8,
    preco: {
      semana: { pequeno: 30, grande: 45 },
      fimDeSemana: { pequeno: 30, grande: 45 }
    }
  }
];

module.exports = petshops;
