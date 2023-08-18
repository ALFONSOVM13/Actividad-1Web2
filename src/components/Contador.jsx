import React, { useState } from 'react';

const Contador = ({ onCountChange }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onCountChange(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onCountChange(count - 1);
  };

  const handleReset = () => {
    setCount(0);
    onCountChange(0);
  };

  const contadorBoxSmallStyles = {
    width: '400px',
    height: '100px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    display: 'inline-block',
    margin: '10px',
  };

  const buttonStyles = {
    margin: '10px',
    marginBottom: '10px',
  };

  return (
    <div className="container text-center">
      <div style={contadorBoxSmallStyles}>
        <div className="contador">
          <p className="mb-2">Contador: {count}</p>
          <button className="btn btn-success" style={buttonStyles} onClick={handleIncrement}>
            Incrementar
          </button>
          <button className="btn btn-warning" style={buttonStyles} onClick={handleDecrement}>
            Decrementar
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Resetear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;


