import React, { useState } from "react";
import { auth } from "../../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { toast, Toaster } from "sonner";
import logo from "../../../public/logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const singleUser = userData.user;
      localStorage.setItem("user-data", JSON.stringify(singleUser));
      navigate("/login");
      toast.success(`You have signed in successfully `);
    } catch (error) {
      console.error(error.message);
      toast.error(`${error.message} `);
    }
  };
  return (
    <div className="container ">
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          className: "my-toast",
        }}
      />
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <div className="logo pad d-flex align-items-start text-center  ">
          <img src={logo} width="50px" />
          <Link className="nav-link ps-2" to="/">
            Trailed
          </Link>
        </div>
        <div className="wrapper px-sm-5 py-sm-4 p-3 rounded-2 ">
          <h1 className="mb-4">Sign Up</h1>
          <form
            onSubmit={formSubmit}
            className="d-flex align-items-center flex-column">
            <div className="input-grp d-flex align-items-start flex-column">
              <input
                className="form-control mb-3  "
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <h5 className="have-account mb-4">
                Already have an account?{" "}
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </h5>
            </div>
            <button type="submit" className="btn">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
