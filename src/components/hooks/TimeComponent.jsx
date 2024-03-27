import { useState, useEffect } from "react";

const TimeComponent = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p>Our Clock</p>
      <h1>{timer.toLocaleTimeString()}</h1>
    </div>
  );
};
export default TimeComponent;
