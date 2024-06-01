import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import useLogout from "../Hooks/useLogout";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container headerContainer">
        <Logo />
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="iconContainer">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#!">
                  About
                </a>
              </li> */}

              {sessionStorage.getItem("Name") ? (
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="text"
                  style={{ position: "relative", left: "60px" }}
                >
                  {sessionStorage.getItem("Name")}
                </button>
              ) : (
                <></>
              )}

              {sessionStorage.length > 1 ? (
                <li className="nav-item">
                  <button
                    onClick={useLogout()}
                    type="button"
                    className="btn btn-success login"
                    style={{ position: "relative", left: "100px" }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to={"/login"}
                    type="button"
                    className="btn btn-success login"
                    style={{ position: "relative", left: "100px" }}
                  >
                    Login
                  </Link>
                </li>
              )}
              <li className="nav-item "></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
