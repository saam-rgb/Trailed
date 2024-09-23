import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { FilterBar } from "../../components/FilterBar/FilterBar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

export const Luggage = ({ cart, setCart }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">Luggages</h1>
        <div className="row ">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <Card cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Backpack = ({ cart, setCart }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">Backpacks</h1>
        <div className="row ">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <Card cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Duffle = ({ cart, setCart }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">Duffles</h1>
        <div className="row ">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <Card cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Rucksacks = ({ cart, setCart }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">RuckSacks</h1>
        <div className="row ">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <Card cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
