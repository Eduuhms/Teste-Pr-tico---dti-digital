const express = require('express');
const router = express.Router();
const { calcularMelhorPetshop } = require('../services/calculadora');

router.post('/melhor-petshop', (req, res) => {
  const { data, pequenos, grandes } = req.body;

  if (!data || pequenos == null || grandes == null) {
    return res.status(400).json({ error: 'Dados incompletos. Envie data, pequenos e grandes.' });
  }

  try {
    const resultado = calcularMelhorPetshop(data, pequenos, grandes);
    res.json(resultado);
  } catch (e) {
    console.error('Erro ao calcular:', e);
    res.status(500).json({ error: 'Erro no processamento' });
  }
});

module.exports = router;
