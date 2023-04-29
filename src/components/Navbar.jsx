import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ShoppingBagOpen } from "phosphor-react";
import "../components/Navbar.css";
import { useContext } from "react";
import { Cartcontext } from "./Context";

const Navbar = () => {
  const globalState = useContext(Cartcontext);
  return (
    <nav className="navbarContainer">
      <div className="navbarLinks">
        <Link className="navbarLink" to="/">
          <ShoppingBagOpen className="shoppingBag" size={35} color="white" />
        </Link>
        <Link className="navbarLink" to="/">
          Home
        </Link>
        <Link className="navbarLink" to="/catalogue">
          Catalogue
        </Link>
      </div>
      <div className="navbarCart">
        <Link to="/cart" className="navbarLink">
          <ShoppingCart className="shoppingCart" size={35} color="white" />
        </Link>
        <p className="cartProdNr">{globalState.totalQuantity}</p>
      </div>
    </nav>
  );
};

export default Navbar;
