import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { toast, Toaster } from "sonner";

// * Card in Product page
export const Card = ({ cart, setCart, like, setLike, lists }) => {
  const [text, setText] = useState("Add to Cart");

  const addWishlist = (params) => {
    console.log(params);
    console.log(...like);
    setLike([...like, params]);
    toast.success(`${params.name} added to`, {
      action: <Link to="/wishlist">Shopping list</Link>,
    });
  };
  const addCart = (params) => {
    console.log(params);

    setCart([...cart, params]);
    toast.success(`${params.name} added to`, {
      action: <Link to="/cart">Cart</Link>,
    });
  };

  const textChange = (params) => {
    if (params.id === params.id) {
      setText("Added to cart");
    } else {
      text;
    }
  };
  return (
    <div className="card-container mb-5 ">
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          className: "my-toast",
        }}
      />
      <div className="gap-3 row d-flex  justify-content-start align-items-start me-0 pe-0">
        {lists.map((list, index) => (
          // let [wasPrice, image, name, offer] = list;
          <div
            className="card col-md-4 col-sm-4 col-12"
            style={{ width: 18 + "rem" }}
            key={index}>
            <div>
              <div className="position-relative">
                <img src={list.image} className="card-img-top" alt="image" />
                <div className="position-absolute  end-0 icon-div">
                  <FavoriteBorderOutlinedIcon
                    className="icon-card"
                    onClick={() => addWishlist(list)}
                  />
                </div>
              </div>
            </div>
            <div className="card-body d-flex align-items-start justify-content-between">
              <div>
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">
                  <span className="was-price">₹{list.wasPrice}</span>&ensp; ₹
                  {list.wasPrice - list.wasPrice * list.offer}
                </p>
              </div>
              <div className="cart-btn">
                <a onClick={() => addCart(list)} className="btn btn-primary">
                  {text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export const Card1 = ({ cart, setCart }) => {
//   const [type, setType] = useState("cabin");
//   const addCart = (params) => {
//     console.log(params);
//     setCart([...cart, params]);
//   };
//   return (
//     <div className="card-container">
//       {luggage.map((list, index) => (
//         <div className="card" style={{ width: 18 + "rem" }} key={index}>
//           <img className="card-img-top" alt="image" />
//           <div className="card-body">
//             <h5 className="card-title">{list.name}</h5>
//             <div className="card-text">
//               ${" "}
//               <div className="d-flex">
//                 <p className="me-2">
//                   <small>{list.cabin.offer}</small>
//                 </p>
//                 <p className="me-2">
//                   <bold>{list.cabin.price}</bold>
//                 </p>
//                 <h5 className="me-2">{list.cabin.offer}%</h5>
//               </div>
//             </div>
//             <a onClick={() => addCart(list)} className="btn btn-primary">
//               Add to cart
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
