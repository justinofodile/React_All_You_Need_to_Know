import { useState } from "react";

const withCounter = (Component) => {
  const newComponent = () => {
    const [counter, setCounter] = useState(0);
    const handleIncreament = () => {
      setCounter((oldCounter) => oldCounter + 1);
    };
    return <Component counter={counter} handleIncreament={handleIncreament} />;
  };
  return newComponent;
};

export default withCounter;
