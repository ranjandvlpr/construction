import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{
          height: "5rem",
          backgroundColor: "rgb(1, 34, 54)",
          zIndex: "5",
          position: "fixed",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ marginRight: "10px", height: "75px" }}
            />
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  style={{ color: "white" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "white" }}>
                  Gallery
                </Link>
              </li>
              \
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "white" }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: "white" }}>
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  DropDown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      style={{ color: "black" }}
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      style={{ color: "black" }}
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      style={{ color: "black" }}
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: "white" }}
              >
                BAJRANGI CONSTRUCTIONS TRADING COMPANY
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
