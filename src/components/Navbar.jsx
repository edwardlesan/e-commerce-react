import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ShoppingBagOpen } from "phosphor-react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        {/* <Link className="navbar-link" to="/">
          <ShoppingBagOpen size={35} color="white" />
        </Link>
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/">
          Catalogue
        </Link> */}
        <a className="navbar-link" href="/">
          <ShoppingBagOpen size={35} color="white" />
        </a>
        <a className="navbar-link" href="/">
          Home
        </a>
        <a className="navbar-link" href="/">
          Catalogue
        </a>
      </div>
      <div className="navbar-cart">
        <a href="/" className="navbar-link">
          <ShoppingCart className="shopping-cart" size={35} color="white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
