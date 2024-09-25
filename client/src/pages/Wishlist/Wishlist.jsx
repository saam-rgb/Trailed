import React from "react";
import { WishlistCard } from "../../components/Card/WishlistCard";

export const Wishlist = ({ like, setLike, cart, setCart }) => {
  return (
    <div>
      <div>
        <WishlistCard
          like={like}
          setLike={setLike}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
};
