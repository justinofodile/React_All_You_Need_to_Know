import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const handleAddCounter = () => {
    setCounter((preCounter) => {
      return preCounter + 1;
    });
  };
  const handleReduceCounter = () => {
    setCounter((preCounter) => {
      return preCounter - 1;
    });
  };

  return (
    <div>
      <p>Counter App</p>
      {counter === 0 ? (
        <button onClick={handleReduceCounter} disabled>
          -
        </button>
      ) : (
        <button onClick={handleReduceCounter}>-</button>
      )}
      <span>{counter}</span>
      <button onClick={handleAddCounter}>+</button>
    </div>
  );
};

export default CounterApp;
