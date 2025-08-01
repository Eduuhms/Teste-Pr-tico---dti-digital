import './Calculadora.css';

const Calculadora = ({
  data,
  pequenos,
  grandes,
  onDataChange,
  onPequenosChange,
  onGrandesChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit} className="calculator-form">
      <div className="form-group">
        <label className="form-label">Data:</label>
        <input 
          type="date" 
          value={data} 
          onChange={(e) => onDataChange(e.target.value)} 
          className="form-input"
          required 
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Cães pequenos:</label>
        <input 
          type="number" 
          min="0" 
          value={pequenos} 
          onChange={(e) => onPequenosChange(e.target.value)} 
          className="form-input"
          required 
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Cães grandes:</label>
        <input 
          type="number" 
          min="0" 
          value={grandes} 
          onChange={(e) => onGrandesChange(e.target.value)} 
          className="form-input"
          required 
        />
      </div>
      
      <button type="submit" className="submit-button">Calcular</button>
    </form>
  );
};

export default Calculadora;