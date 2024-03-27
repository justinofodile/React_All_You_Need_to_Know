import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("order_confirmation");
  };
  return (
    <div>
      <p>Home</p>
      <button onClick={handleNavigate}>Place Order</button>
    </div>
  );
};

export default Home;
