import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navi">
      <div className="nav-container">
        <div className="row top d-flex align-items-center px-4 pt-2">
          <div className="img col-md-4">
            <h2>
              <div className="logo d-flex align-items-end">
                <img src={logo} width="50px" />
                <Link className="nav-link ps-2" to="/">
                  Trailed
                </Link>
              </div>
            </h2>
          </div>

          <div className="searchbar col-md-4">
            <input type="search" name="" id="" className="form-control" />
          </div>
          <div className="profile d-flex col-md-4 justify-content-end">
            <h3>
              <Link className="nav-link px-2" to="/profile">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </h3>
            <h3>
              <Link className="nav-link px-2" to="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </h3>
            <h3>
              <Link className="nav-link px-2" to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </h3>
          </div>
        </div>
        <div className="bottom collapse navbar-collapse navbar navbar-expand-lg text-center d-flex justify-content-center">
          <ul className="navbar-nav  mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/luggage">
                Luggage
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/backpack">
                Backpacks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/duffle">
                Duffle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rucksack">
                Rucksacks
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
