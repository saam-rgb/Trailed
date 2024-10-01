import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { FilterBar } from "../../components/FilterBar/FilterBar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import {
  backPackList,
  duffleList,
  luggageList,
  newCollections,
  rucksackList,
} from "../../utils/product";

export const Luggage = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">Luggages</h1>
        <div className="row ">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9 ">
            <Card
              cart={cart}
              setCart={setCart}
              lists={luggageList}
              like={like}
              setLike={setLike}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Backpack = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">Backpacks</h1>
        <div className="row ">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <Card
              cart={cart}
              setCart={setCart}
              lists={backPackList}
              like={like}
              setLike={setLike}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Duffle = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">Duffles</h1>
        <div className="row ">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9">
            <Card
              cart={cart}
              setCart={setCart}
              lists={duffleList}
              like={like}
              setLike={setLike}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Rucksacks = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="heading">RuckSacks</h1>
        <div className="row">
          <div className="col-md-3">
            <FilterBar />
          </div>
          <div className="col-md-9 ">
            <Card
              cart={cart}
              setCart={setCart}
              lists={rucksackList}
              like={like}
              setLike={setLike}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const NewCollections = ({ cart, setCart, like, setLike }) => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <h1 className="heading">New Collections</h1>

        <Card
          cart={cart}
          setCart={setCart}
          lists={newCollections}
          like={like}
          setLike={setLike}
        />
      </div>
    </div>
  );
};
