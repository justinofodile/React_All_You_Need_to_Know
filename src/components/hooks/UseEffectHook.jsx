import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((preVal) => preVal + 1);
  };
  useEffect(() => {
    console.log("Call on every render");
  });
  useEffect(() => {
    console.log("Call on initial render");
  }, []);
  useEffect(() => {
    console.log("Call on dependency change render");
  }, [counter]);
  return (
    <div>
      <p>Use Effect Component</p>
      <button onClick={handleClick}>Change Counter</button>
      <h2>Counter: {counter}</h2>
    </div>
  );
};

export default UseEffectHook;
