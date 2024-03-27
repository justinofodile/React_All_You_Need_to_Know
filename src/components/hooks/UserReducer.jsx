import React, { useReducer } from "react";

const initialstate = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;

    default:
      return state;
      break;
  }
};

const UserReducer = () => {
  const [counter, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h3>User Reducer Hook</h3>
      <button onClick={() => dispatch("increment")}>+</button>
      <p>{counter}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
};

export default UserReducer;
