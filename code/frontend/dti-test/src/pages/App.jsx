import { useState } from 'react';
import { calcularMelhorPetshop } from '../services/api';
import Navbar from '../components/Navbar/Navbar';
import Calculadora from '../components/Calculadora/Calculadora';
import Resultado from '../components/Resultado/Resultado';
import ErroCalculo from '../components/ErroCalculo/ErroCalculo';
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
      <Navbar />
      
      <main className="main-content">
        <div className="page-header">
        </div>

        <Calculadora
          data={data}
          pequenos={pequenos}
          grandes={grandes}
          onDataChange={setData}
          onPequenosChange={setPequenos}
          onGrandesChange={setGrandes}
          onSubmit={handleSubmit}
        />

        {erro && <ErroCalculo message={erro} />}
        {resultado && <Resultado resultado={resultado} />}
      </main>
    </div>
  );
}

export default App;