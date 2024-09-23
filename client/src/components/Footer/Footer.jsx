import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg p-5">
      <div className=" row">
        <div className="col-md-3">
          <h3 className="tag">Warm hugs, Trailed</h3>
          <p>
            We’ll email you important updates, new launch info and the
            occasional raccoon GIF. And, exclusive sale details of course.
          </p>
          <input type="text" className="form-control" placeholder="E-mail" />
        </div>
        <div className="col-md-3">
          <p>
            <strong>
              For Gifting & Corporate orders WhatsApp us at +91 89048 92616 or
              email bulkorders@mokobara.com
            </strong>
          </p>
        </div>
        <div className="col-md-3">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/warranty" className="nav-link">
                Warranty Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Claim My Warranty
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Returns & Exchanges
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Return & Refund Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Terms of Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                mclub Terms and Conditions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Join our team! - careers@mokobara.com{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <p>
            #GoingPlaces We believe humans are like sharks. They have to keep
            moving to thrive. To grow. To feel alive. As long as they have a
            destination in mind - whether it’s a life goal, career aim or even a
            trip - they have a purpose in life. They’re #GoingPlaces. We’re on a
            mission To help folks who are #GoingPlaces
          </p>
        </div>
      </div>
    </div>
  );
};
