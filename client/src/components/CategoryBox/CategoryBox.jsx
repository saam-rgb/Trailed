import React from "react";
import { categories } from "./categories";
import "./CategoryBox.css";

export const CategoryBox = () => {
  return (
    <div className="container my-4">
      <div className="row ">
        {categories.map((category, index) => (
          <div className="col-md-3 cat-card" key={index}>
            <div className="screen">
              <img src={category.image} alt="images" />
            </div>
            <h4 className="cat-content">{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
