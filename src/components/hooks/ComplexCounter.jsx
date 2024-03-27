import React, { useReducer } from "react";

const initialstate = {
  counter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
      break;
    case "decrement":
      return { counter: state.counter - action.value };

    default:
      return state;
      break;
  }
};

const ComplexCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h3>User Reducer Hook</h3>
      <button onClick={() => dispatch({ type: "increment", value: 3 })}>
        +
      </button>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "decrement", value: 3 })}>
        -
      </button>
    </div>
  );
};

export default ComplexCounter;
