import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="twine-header">
      <header className="pt-3 pb-3 main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bdr-header header-fixed justify-content-between">
            <Link className="navbar-brand" to="/">
              <img
                src="assets/images/logo.png"
                width="75"
                className="logo_show"
              />
              <img
                src="assets/images/logo_white.png"
                width="75"
                className="logo_hide"
              />
            </Link>
            <div className="mobile-option show-mobile-flex">
              <Link to="/request-demo">
                <button className="btn theme-btn-blue show-mobile">
                  Request Demo
                </button>
              </Link>
              <button
                className="navbar-toggler border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li
                  className="nav-item show-mobile"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <NavLink className="nav-link" to="/our-story">
                    Our Story
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <NavLink className="nav-link" to="/careers">
                    Careers
                  </NavLink>
                </li>
                <li
                  className="nav-item show-mobile"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                >
                  <a
                    className="nav-link"
                    href="https://app.twinelabs.com/users/login/"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
              <div className="form-inline show-desktop">
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item ">
                    <Link
                      className="btn theme-btn-blue theme-btn"
                      to="/request-demo"
                    >
                      Request Demo
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://app.twinelabs.com/users/login/"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="header-space"></div>
    </div>
  );
}

export default Header;
