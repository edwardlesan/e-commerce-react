import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ShoppingBagOpen } from "phosphor-react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <div className="navbarLinks">
        <Link className="navbarLink" to="/">
          <ShoppingBagOpen className="shoppingBag" size={35} color="white" />
        </Link>
        <Link className="navbarLink" to="/">
          Home
        </Link>
        <Link className="navbarLink" to="/">
          Catalogue
        </Link>
      </div>
      <div className="navbarCart">
        <a href="/" className="navbarLink">
          <ShoppingCart className="shoppingCart" size={35} color="white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
