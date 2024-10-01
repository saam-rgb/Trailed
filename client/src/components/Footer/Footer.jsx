import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg p-5">
      <div className=" row">
        <div className="col-md-3 mb-sm-0 mb-4">
          <h3 className="tag">Warm hugs, Trailed</h3>
          <p>
            We’ll email you important updates, new launch info and the
            occasional cockroach GIF. And, exclusive sale details of course.
          </p>
          <input type="text" className="form-control" placeholder="E-mail" />
        </div>
        <div className="col-md-3 mb-sm-0 mb-4">
          <p>
            <strong>
              For Gifting & Corporate orders WhatsApp us at +91 91502 45248 or
              email bulkorders@trailed.com
            </strong>
          </p>
        </div>
        <div className="col-md-3 mb-sm-0 mb-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/faq" className="navLink">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/warranty" className="navLink">
                Warranty Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="navLink">
                Claim My Warranty
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="navLink">
                Returns & Exchanges
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="navLink">
                Return & Refund Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="navLink">
                Terms of Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="navLink">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="navLink">
                tclub Terms and Conditions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="navLink">
                Join our team! - careers@trailed.com{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 ">
          <div>
            <p className="tag">#LeaveAMark</p>
            <p>
              We believe that life's true purpose is found in movement—whether
              it's chasing a dream, advancing your career, or embarking on a
              journey. Like the adventurers who never stop exploring, every step
              forward is a chance to leave a lasting impression.
            </p>
            <p>
              At Trailed, we know that your journey begins the moment you set
              your sights on a destination, not when you arrive. Our stylish and
              durable gear is designed to make your travel seamless, letting you
              focus on the path ahead.
            </p>
            <p>
              From city streets to mountain trails, every trip you take is an
              opportunity to leave your mark on the world. And with Trailed,
              you're not just going places—you’re making sure they remember you
              were there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
