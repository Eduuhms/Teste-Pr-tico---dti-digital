const express = require('express');
const router = express.Router();
const { calcularMelhorPetshop } = require('../services/calculadora');

router.post('/melhor-petshop', (req, res) => {
  const { data, pequenos, grandes } = req.body;

  if (!data || pequenos == null || grandes == null) {
    return res.status(400).json({ error: 'Dados incompletos. Envie data, pequenos e grandes.' });
  }
  
  if (pequenos < 0 || grandes < 0) {
    return res.status(400).json({ error: 'Número de cães não pode ser negativo.' });
  }

  if (pequenos === 0 && grandes === 0) {
    return res.status(400).json({ error: 'Deve haver pelo menos 1 cão para banho.' });
  }

  try {
    const resultado = calcularMelhorPetshop(data, parseInt(pequenos), parseInt(grandes));
    res.json(resultado);
  } catch (e) {
    console.error('Erro ao calcular:', e);
    res.status(500).json({ error: 'Erro no processamento: ' + e.message });
  }
});

module.exports = router;
