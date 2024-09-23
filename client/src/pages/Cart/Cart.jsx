import React from "react";
import { CartCard } from "../../components/Card/CartCard";

export const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <CartCard cart={cart} setCart={setCart} />
    </div>
  );
};
