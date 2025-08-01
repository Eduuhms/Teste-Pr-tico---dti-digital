function ehFimDeSemana(dataString) {
  
  let data;
  if (dataString.includes('/')) {
    const [dia, mes, ano] = dataString.split('/');
    data = new Date(ano, mes - 1, dia); 
  } else {
    data = new Date(dataString);
  }
  
  const diaSemana = data.getDay(); 
  return diaSemana === 0 || diaSemana === 6; // 0 = Domingo, 6 = Sábado
}

module.exports = { ehFimDeSemana };
