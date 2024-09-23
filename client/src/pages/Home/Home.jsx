import React from "react";
import { Slider } from "../../components/Carousel/Slider";
import { Footer } from "../../components/Footer/Footer";
import Marquee from "react-fast-marquee";
import { CategoryBox } from "../../components/CategoryBox/CategoryBox";

export const Home = () => {
  return (
    <div>
      <Slider />
      New Collections
      <Marquee className="marquee" speed={90}>
        Designed to #leaveamark &ensp; &ensp; &ensp; Designed to #leaveamark
        &ensp; &ensp; &ensp; Designed to #leaveamark &ensp; &ensp; &ensp;
        Designed to #leaveamark &ensp; &ensp; &ensp;
      </Marquee>
      <CategoryBox />
      <Footer />
    </div>
  );
};
