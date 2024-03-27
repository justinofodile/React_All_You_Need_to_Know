import { useState } from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = ({ handleIncreament, counter }) => {
  return (
    <div>
      <h2 onMouseOver={handleIncreament}>Hoverd {counter} times</h2>
    </div>
  );
};

export default withCounter(HoverCounter);
