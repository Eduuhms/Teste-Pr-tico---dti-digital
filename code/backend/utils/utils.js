function ehFimDeSemana(dataString) {
  let data;
  
  if (dataString.includes('/')) {
    const [dia, mes, ano] = dataString.split('/');
    data = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
  } else if (dataString.includes('-')) {
    const [ano, mes, dia] = dataString.split('-');
    data = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
  } else {
    data = new Date(dataString);
  }
  
  const diaSemana = data.getDay(); 
  return diaSemana === 0 || diaSemana === 6; 
}

module.exports = { ehFimDeSemana };
