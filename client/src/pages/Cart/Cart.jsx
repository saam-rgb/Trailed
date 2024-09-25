import React from "react";
import { CartCard } from "../../components/Card/CartCard";

export const Cart = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <CartCard cart={cart} setCart={setCart} like={like} setLike={setLike} />
    </div>
  );
};
