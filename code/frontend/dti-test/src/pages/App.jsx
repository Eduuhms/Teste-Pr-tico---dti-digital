import { useState } from 'react';
import { calcularMelhorPetshop } from '../services/api';
import Header from '../components/header/header';
import CalculatorForm from '../components/Calculadora/Calculadora';
import ResultDisplay from '../components/Resultado/Resultado';
import ErrorDisplay from '../components/ErroCalculo/ErroCalculo';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [pequenos, setPequenos] = useState(0);
  const [grandes, setGrandes] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErro('');
    setResultado(null);

    // Validação no frontend
    if (!data) {
      setErro('Por favor, selecione uma data.');
      return;
    }

    if (parseInt(pequenos) === 0 && parseInt(grandes) === 0) {
      setErro('Deve haver pelo menos 1 cão para banho.');
      return;
    }

    try {
      const res = await calcularMelhorPetshop(data, parseInt(pequenos), parseInt(grandes));
      setResultado(res);
    } catch (err) {
      console.error('Erro na API:', err);
      const errorMessage = err.response?.data?.error || 'Erro ao calcular. Verifique os dados e tente novamente.';
      setErro(errorMessage);
    }
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <CalculatorForm 
          data={data}
          pequenos={pequenos}
          grandes={grandes}
          onDataChange={setData}
          onPequenosChange={setPequenos}
          onGrandesChange={setGrandes}
          onSubmit={handleSubmit}
        />
        
        {erro && <ErrorDisplay message={erro} />}
        {resultado && <ResultDisplay resultado={resultado} />}
      </main>
    </div>
  );
}

export default App;