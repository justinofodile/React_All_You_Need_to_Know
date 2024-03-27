import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h3>Product List</h3>
      <NavLink to="featured">Featured Product</NavLink>
      <NavLink to="new">New Product</NavLink>
      <Outlet />
    </div>
  );
};

export default Product;
