import React from "react";

import "./Card.css";
import { luggageList } from "../../utils/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// * Card in Product page
export const Card = ({ cart, setCart }) => {
  const addCart = (params) => {
    console.log(params);
    setCart([...cart, params]);
  };
  return (
    <div className="card-container mb-5">
      <div className="gap-3 row">
        {luggageList.map((list, index) => (
          <div
            className="card col-md-4 col-sm-4"
            style={{ width: 18 + "rem" }}
            key={index}>
            <div>
              <div className="position-relative">
                <img src={list.image} className="card-img-top" alt="image" />
                <p className="position-absolute top-0 end-0"></p>
              </div>
            </div>
            <div className="card-body d-flex align-items-start justify-content-between">
              <div>
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">
                  ₹ {list.wasPrice - list.wasPrice * list.offer}
                </p>
              </div>
              <div className="cart-btn">
                <a onClick={() => addCart(list)} className="btn btn-primary">
                  Add to cart
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
