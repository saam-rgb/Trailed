import React from "react";
import { Slider } from "../../components/Carousel/Slider";
import { Footer } from "../../components/Footer/Footer";
import Marquee from "react-fast-marquee";
import { CategoryBox } from "../../components/CategoryBox/CategoryBox";
import { NewCollections } from "../Luggage/Luggage";

export const Home = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <Slider />
      <CategoryBox />
      <NewCollections
        cart={cart}
        setCart={setCart}
        like={like}
        setLike={setLike}
      />
      <Marquee className="marquee" speed={90}>
        Designed to #leaveamark &ensp; &ensp; &ensp; Designed to #leaveamark
        &ensp; &ensp; &ensp; Designed to #leaveamark &ensp; &ensp; &ensp;
        Designed to #leaveamark &ensp; &ensp; &ensp;
      </Marquee>

      <Footer />
    </div>
  );
};
