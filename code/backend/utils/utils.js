function ehFimDeSemana(dataString) {
  const [dia, mes, ano] = dataString.split('/');
  const data = new Date(`${ano}-${mes}-${dia}`);
  const diaSemana = data.getDay(); 
  return diaSemana === 0 || diaSemana === 6;
}

module.exports = { ehFimDeSemana };
