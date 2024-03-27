import { useState } from "react";
import React from "react";
const FunctionalComponent = () => {
  const [data, setData] = useState("react");

  //   setData("Css");

  const handleClick = (props) => {
    console.log("This is the funxtional component event");
    setData(props);
  };

  return (
    <div>
      <p>This is Our Functional Component</p>
      <p>{data}</p>
      <button type="button" onClick={() => handleClick("CSS")}>
        Click me
      </button>
    </div>
  );
};

export default FunctionalComponent;
