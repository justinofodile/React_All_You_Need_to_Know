import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>Order Confirmation Page</p>
      <button onClick={handleNavigate}>Go Back</button>
    </div>
  );
};

export default OrderConfirmation;
