import React from "react";

export const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex align-items-start justify-content-between">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
                <div className="profile d-flex col-md-4 justify-content-end">
                  <h3>
                    <Link className="nav-link px-2" to="/profile">
                      <AccountCircleOutlinedIcon className="icon-color" />
                    </Link>
                  </h3>
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
                </div>
              </div>

              <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="luggage">
                      Luggage
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/backpack">
                      Backpack
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/duffle">
                      Duffle
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/rucksack">
                      Rucksack
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
