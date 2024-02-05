import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
                className={location.pathname === "/home" ? "nav-link active" : "nav-link"}
                // style={location.pathname === "/home" ? { color: "black" } : { color: "grey" }}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                to="/about"
                // style={location.pathname === "/about" ? { color: "black" } : { color: "grey" }}
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* custom theme */}
          <div className="d-flex">
            <div
              className="bg-primary rounded-circle mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("primary");
              }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-danger rounded-circle mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("danger");
              }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-success rounded-circle mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("success");
              }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-warning rounded-circle mx-2"
              style={{ height: "25px", width: "25px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("warning");
              }}
            ></div>
          </div>
          {/* drak-mode button */}
          <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleMode(null);
              }}
              style={{ cursor: "pointer" }}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Toggle mode
            </label>
          </div>
          {/* search form */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About"
};
