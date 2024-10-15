import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../public/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./Navbar.css";

export const Nav = ({ isLogged, setIsLogged }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-between">
          <div className="logo d-flex align-items-start text-center">
            <img src={logo} width="50px" />
            <Link className="nav-link ps-2" to="/">
              Trailed
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0  d-flex align-items-center">
              <li className="nav-item mb-0">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-0">
                <Link className="nav-link" to="/luggage">
                  Luggage
                </Link>
              </li>
              <li className="nav-item mb-0">
                <Link className="nav-link" to="/backpack">
                  Backpacks
                </Link>
              </li>
              <li className="nav-item mb-0">
                <Link className="nav-link" to="/duffle">
                  Duffle
                </Link>
              </li>
              <li className="nav-item mb-0">
                <Link className="nav-link" to="/rucksack">
                  Rucksacks
                </Link>
              </li>
            </ul>
            <div className="profile d-flex  justify-content-center ms-0">
              <h3>
                <Link className="nav-link px-2" to="/wishlist">
                  <FavoriteBorderOutlinedIcon className="icon-color" />
                </Link>
              </h3>
              <h3>
                <Link className="nav-link px-2" to="/cart">
                  <ShoppingCartOutlinedIcon className="icon-color" />
                </Link>
              </h3>
              {isLogged ? (
                <h3>
                  <Link className="nav-link px-2" to="/profile">
                    <AccountCircleOutlinedIcon className="icon-color" />
                  </Link>
                </h3>
              ) : (
                <Link to="/login" className="btn">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
