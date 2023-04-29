import React, { useEffect } from "react";
import "./Cart.css";
import { useContext } from "react";
import { Cartcontext } from "./Context";
import { Link } from "react-router-dom";
import { X, Plus, Minus } from "phosphor-react";

const Cart = () => {
  const globalState = useContext(Cartcontext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  var totalQuantity = state.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);

  useEffect(() => {
    globalState.setTotalQuantity(totalQuantity);
  }, [totalQuantity]);

  function NoItemsMessage() {
    return (
      <div className="noProdsContainer">
        <h2 className="noProdsMsg">Your shopping cart is currently empty!</h2>
        <Link to="/" className="homeButton">
          Go back!
        </Link>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <h4 className="cartTitle">My cart</h4>
      {totalQuantity === 0 ? (
        <NoItemsMessage />
      ) : (
        state.map((item, index) => (
          <div className="cartProductCard" key={index + item.title}>
            <img
              className="cartProductImg"
              src={item.image}
              alt="product image"
            ></img>
            <p className="cartProductTitle">{item.title}</p>
            <p className="cartProductQuantity">{item.quantity}</p>
            <p className="cartProductPrice">
              ${item.quantity * item.price.toFixed(2)}
            </p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                <Plus size={22}></Plus>
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    if (window.confirm("Remove the product?")) {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }
                }}
              >
                <Minus size={22}></Minus>
              </button>
            </div>
            <h2
              onClick={() => {
                if (window.confirm("Remove the product?")) {
                  dispatch({ type: "REMOVE", payload: item });
                }
              }}
            >
              <X size={22}></X>
            </h2>
          </div>
        ))
      )}
      {state.length > 0 && (
        <div className="total">
          <p>Total:</p>
          <h2>${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
