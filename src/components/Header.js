import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      {/* header section strats */}
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand">
              <span>
                <Link to="/">mithilaFOOD</Link>
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mx-auto ">
                <li className="nav-item active">
                  <a className="nav-link">
                    <Link to="/">Home</Link>{" "}
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/menu">Menu</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/about">About</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/book">Book Table</Link>
                  </a>
                </li>
              </ul>
              <div className="user_option">
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
                <a className="order_online">
                  <Link to="/book">Book Now</Link>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
    </div>
  );
}

export default Header;
