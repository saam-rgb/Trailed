import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mtCart from "../../assets/image/emptycart.png";
import { toast, Toaster } from "sonner";

export const CartCard = ({ cart, setCart, like, setLike }) => {
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

  //* Discount price in cart
  useEffect(() => {
    let discountTotal = 0;
    cart.map(
      (itemDiscount) =>
        (discountTotal =
          itemDiscount.wasPrice * itemDiscount.offer * itemDiscount.count +
          discountTotal)
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

  //* Add to Wishlist
  const addWishlist = (params) => {
    console.log(params);
    removeItem(params);
    setLike([...like, params]);
    toast.info(`${params.name} added to`, {
      action: <Link to="/wishlist">Shopping list</Link>,
    });
  };

  //* Remove item
  const removeItem = (params) => {
    let removedItem = cart.filter((cartItem) => cartItem.id !== params.id);
    toast.error(`${params.name} removed from Cart`);
    setCart(removedItem);
  };
  return (
    <div className="cart-main">
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          className: "my-toast",
        }}
      />
      <div className="container-sm cart-card">
        {cart.length > 0 ? (
          <div className=" m-sm-5 row d-flex justify-content-center">
            <div className="border rounded-2 col-md-8 col-12 me-md-4 mx-0 mb-sm-0 mb-4 ">
              <div className="cart-items m-3">
                {cart.map((item, index) => (
                  <div key={index} className="mb-4">
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
                      <div className="card-body ms-3">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text ">
                          <span className="was-price">₹{item.wasPrice}</span>
                          &ensp; ₹{item.wasPrice - item.wasPrice * item.offer}
                          &ensp;
                          <span className="offer">{item.offer * 100}% Off</span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex bottom-div flex-wrap justify-content-sm-start justify-content-center">
                      <div className="d-flex mb-sm-0 mb-2">
                        <button
                          className="counter-btn btn me-2 lh-1"
                          onClick={() => addSubItem(item, -1)}>
                          -
                        </button>
                        <div className="counter border px-3 py-0">
                          <p>{item.count}</p>
                        </div>
                        <button
                          className="counter-btn btn ms-2 lh-1 d-flex justify-content-center "
                          onClick={() => addSubItem(item, 1)}>
                          +
                        </button>
                      </div>
                      <a
                        onClick={() => addWishlist(item)}
                        className="nav-link btn mb-sm-0 mb-2">
                        SAVE FOR LATER
                      </a>
                      <a
                        onClick={() => removeItem(item)}
                        className="nav-link btn mb-sm-0 mb-2">
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

            {/* *Order Summary */}
            <div className="  col-md-3  ">
              <div className="p-4 border">
                <p className="price-details">PRICE DETAILS</p>
                <hr />

                {cart.map((items, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between">
                      <p>
                        {items.name} (x{items.count})
                      </p>
                      <p>₹{items.wasPrice * items.count}</p>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-between">
                  <p>Discount </p>
                  <p>- ₹{discount}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between ">
                  <p className="total">Total</p>
                  <p className="total">₹{price}</p>
                </div>
                <hr />
                <p className="green">You will save ₹{discount} on this order</p>
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
    </div>
  );
};
