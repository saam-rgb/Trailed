import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mtCart from "../../assets/image/emptycart.png";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { toast, Toaster } from "sonner";

export const WishlistCard = ({ like, setLike, cart, setCart }) => {
  //* Add to Cart
  const addCart = (params) => {
    removeItem(params);
    setCart([...cart, params]);
    toast.info(`${params.name} added to`, {
      action: <Link to="/cart">Cart</Link>,
    });
  };

  //* Remove item
  const removeItem = (params) => {
    let removedItem = like.filter((cartItem) => cartItem.id !== params.id);
    toast.error(`${params.name} removed from Shopping list`);
    setLike(removedItem);
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
      <div className="path d-flex">
        <Link className="nav-link ps-2" to="/">
          Home
        </Link>
        <span>-]</span>
        <Link className="nav-link ps-2" to="/wishlist">
          Shopping List
        </Link>
      </div>
      <div className="container-sm cart-card">
        {like.length > 0 ? (
          <div className="">
            <div className=" m-sm-5 row d-flex justify-content-center">
              <div className="border rounded-2 col-md-8 col-12 me-md-4 mx-0 mb-sm-0 mb-4">
                <h3 className="m-4">My Wishlist</h3>
                <div className="cart-items m-3">
                  {like.map((item, index) => (
                    <div
                      key={index}
                      className="mb-4 d-flex justify-content-sm-between flex-sm-nowrap flex-wrap align-items-center">
                      <div className="d-flex justify-content-center align-items-center flex-sm-row flex column">
                        <div className="col-md-2 col-sm-4 col-8">
                          <div className="image">
                            <img
                              src={item.image}
                              className="card-img-top"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="card-body ms-3 d-flex flex-sm-row flex-column">
                          <div className="card-body ms-3 mb-sm-0 mb-2">
                            <h5 className="card-title mb-2">{item.name}</h5>
                            <div className="d-flex justify-content-between">
                              <p className="card-text ">
                                <span className="was-price">
                                  ₹{item.wasPrice}
                                </span>
                                &ensp; ₹
                                {item.wasPrice - item.wasPrice * item.offer}
                                &ensp;
                                <span className="offer">
                                  {item.offer * 100}% Off
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-sm-column flex-row-reverse justify-content-sm-between align-items-sm-end align-items-center ">
                            <DeleteOutlinedIcon
                              onClick={() => removeItem(item)}
                              className="delete-icon mb-sm-0 mb-2"
                            />
                            <a
                              className="nav-link mb-sm-0 mb-2 btn  add-to-cart "
                              onClick={() => addCart(item)}>
                              ADD TO CART
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
              <h3>Your wishlist is empty</h3>

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
