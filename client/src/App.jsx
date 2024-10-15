import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Backpack, Duffle, Luggage, Rucksacks } from "./pages/Luggage/Luggage";
import { createContext, useState } from "react";
import { Cart } from "./pages/Cart/Cart";
import { Navbar } from "./components/Navbar/Navbar";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Nav } from "./components/Navbar/Nav";
import Signup from "./pages/Signin/Signup";
import Login from "./pages/Signin/Login";

function App() {
  const [islogged, setIsLogged] = useState(false);
  const [cart, setCart] = useState([]);
  const [like, setLike] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={<Nav islogged={islogged} setIsLogged={setIsLogged} />}>
            <Route
              path="/"
              element={
                <Home
                  cart={cart}
                  setCart={setCart}
                  like={like}
                  setLike={setLike}
                />
              }
            />
            <Route
              path="/luggage"
              element={
                <Luggage
                  cart={cart}
                  setCart={setCart}
                  like={like}
                  setLike={setLike}
                />
              }
            />
            <Route
              path="/backpack"
              element={
                <Backpack
                  cart={cart}
                  setCart={setCart}
                  like={like}
                  setLike={setLike}
                />
              }
            />
            <Route
              path="/duffle"
              element={
                <Duffle
                  cart={cart}
                  setCart={setCart}
                  like={like}
                  setLike={setLike}
                />
              }
            />
            <Route
              path="/rucksack"
              element={
                <Rucksacks
                  cart={cart}
                  setCart={setCart}
                  like={like}
                  setLike={setLike}
                />
              }
            />
          </Route>
          <Route
            path="/wishlist"
            element={
              <Wishlist
                cart={cart}
                setCart={setCart}
                like={like}
                setLike={setLike}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                like={like}
                setLike={setLike}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login islogged={islogged} setIsLogged={setIsLogged} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
