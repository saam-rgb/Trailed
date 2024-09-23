import React from "react";
import { filterBar } from "./filterBar";
import "./FilterBar.css";

export const FilterBar = () => {
  return (
    <div className="d-flex flex-row flex-md-column flex-wrap ">
      {filterBar.map((filters, index) => (
        <div
          className="btn-group mb-2 ms-md-3 ms-lg-5 pe-2 pe-md-0"
          key={index}>
          <button
            type="button"
            className="btn dropdown-toggle "
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {filters.name}
          </button>
          <ul className="dropdown-menu">
            {filters.drop.map((drops, i) => (
              <li key={i}>
                <a className="dropdown-item" href="#">
                  {drops.type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
