import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(10);

  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  const handleDecrease = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <div className="chevron chevron-up" onClick={handleIncrease}></div>
      <div className="number">{counter}</div>
      <div className="chevron chevron-down" onClick={handleDecrease}></div>
    </div>
  );
}

export default App;
