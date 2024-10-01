import React from "react";
import { Slider } from "../../components/Carousel/Slider";
import { Footer } from "../../components/Footer/Footer";
import Marquee from "react-fast-marquee";
import { CategoryBox } from "../../components/CategoryBox/CategoryBox";
import { NewCollections } from "../Luggage/Luggage";
import { Feature } from "../../components/Feature/Feature";

export const Home = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <Slider />
      <Marquee className="marquee mb-5" speed={90}>
        Designed to #leaveamark &ensp; &ensp; &ensp; Designed to #leaveamark
        &ensp; &ensp; &ensp; Designed to #leaveamark &ensp; &ensp; &ensp;
        Designed to #leaveamark &ensp; &ensp; &ensp;
      </Marquee>
      <CategoryBox />
      <NewCollections
        cart={cart}
        setCart={setCart}
        like={like}
        setLike={setLike}
      />

      <Feature />
      <Footer />
    </div>
  );
};
