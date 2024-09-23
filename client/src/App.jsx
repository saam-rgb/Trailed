import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Backpack, Duffle, Luggage, Rucksacks } from "./pages/Luggage/Luggage";
import { createContext, useState } from "react";
import { Cart } from "./pages/Cart/Cart";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/luggage"
              element={<Luggage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/backpack"
              element={<Backpack cart={cart} setCart={setCart} />}
            />
            <Route
              path="/duffle"
              element={<Duffle cart={cart} setCart={setCart} />}
            />
            <Route
              path="/rucksack"
              element={<Rucksacks cart={cart} setCart={setCart} />}
            />
          </Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
