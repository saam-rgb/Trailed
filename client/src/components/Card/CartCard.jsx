import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mtCart from "../../assets/image/emptycart.png";

export const CartCard = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  //* Total price of items in the cart
  useEffect(() => {
    let total = 0;
    cart.map(
      (itemPrice) =>
        (total =
          (itemPrice.wasPrice - itemPrice.wasPrice * itemPrice.offer) *
            itemPrice.count +
          total)
    );
    setPrice(total);
  });

  useEffect(() => {
    let discountTotal = 0;
    cart.map(
      (itemDiscount) =>
        (discountTotal =
          itemDiscount.wasPrice * itemDiscount.offer + discountTotal)
    );
    setDiscount(discountTotal);
  });

  // * Cart Item Counter
  const addSubItem = (params, countValue) => {
    const findNoOfItems = cart.indexOf(params);
    if (cart[findNoOfItems].count > 0) {
      cart[findNoOfItems].count += countValue;
      setCart([...cart]);
    }

    if (cart[findNoOfItems].count == 0) {
      removeItem(params);
    }
  };

  //* Remove item
  const removeItem = (params) => {
    let removedItem = cart.filter((cartItem) => cartItem.id !== params.id);
    setCart(removedItem);
  };
  return (
    <div className="container cart-card">
      {cart.length > 0 ? (
        <div className=" m-5 row d-flex justify-content-center">
          <div className="border col-md-8  me-md-4 mb-md-0 mb-4">
            <div className="cart-items m-3">
              {cart.map((item, index) => (
                <div key={index}>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="col-md-2 col-sm-4 col-8">
                      <div className="image">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text ">
                        <span className="was-price">₹{item.wasPrice}</span>
                        &ensp; ₹{item.wasPrice - item.wasPrice * item.offer}
                        &ensp;
                        <span className="offer">{item.offer * 100}% Off</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex">
                      <button
                        className="counter-btn"
                        onClick={() => addSubItem(item, -1)}>
                        -
                      </button>
                      <div className="counter border px-3 py-0">
                        <p>{item.count}</p>
                      </div>
                      <button
                        className="counter-btn"
                        onClick={() => addSubItem(item, 1)}>
                        +
                      </button>
                    </div>
                    <Link to="/wishlist" className="nav-link btn">
                      SAVE FOR LATER
                    </Link>
                    <a
                      onClick={() => removeItem(item)}
                      className="nav-link btn ">
                      REMOVE
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="placeorder d-flex justify-content-end border py-3 pe-3">
              <button className="btn">PLACE ORDER</button>
            </div>
          </div>
          <div className="  col-md-3  ">
            <div className="p-4 border">
              <p className="price-details">PRICE DETAILS</p>
              <hr />

              {cart.map((items, index) => (
                <div>
                  <div className="d-flex justify-content-between">
                    <h5>
                      {items.name} x {items.count}
                    </h5>
                    <h5>₹{items.wasPrice * items.count}</h5>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-between">
                <h5>Discount </h5>
                <h5>- ₹{discount}</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>₹{price}</h5>
              </div>
              <hr />
              <p>You will save ₹{discount} on this order</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="m-5 border p-5 d-flex flex-column justify-content-center align-items-center">
            <img
              src={mtCart}
              alt="Empty Cart"
              className="col-md-8 col-sm-10 col-12"
            />
            <h3>Your cart is empty</h3>

            <div className="placeorder">
              <Link to="/" className="btn">
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
