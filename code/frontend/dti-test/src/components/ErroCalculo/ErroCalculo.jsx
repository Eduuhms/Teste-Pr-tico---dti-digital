import './ErroCalculo.css';

const ErroCalculo = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErroCalculo;