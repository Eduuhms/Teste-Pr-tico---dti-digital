import './Resultado.css';

const Resultado = ({ resultado }) => {
  return (
    <div className="resultado-container">
      <div className="resultado-details">
        <p><strong>Nome:</strong> {resultado.nome}</p>
        <p><strong>Preço Total:</strong> {resultado.precoTotal}</p>
        <p><strong>Distância:</strong> {resultado.distancia}</p>
      </div>
    </div>
  );
};

export default Resultado;