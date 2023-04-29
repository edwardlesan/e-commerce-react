import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Catalogue.css";
import { ShoppingCart } from "phosphor-react";
import { Cartcontext } from "./Context";

const notify = () => {
  toast.success("Product added to cart!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const Catalogue = () => {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data;
    setProduct(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const globalState = useContext(Cartcontext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;

  var totalQuantity = state.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);

  useEffect(() => {
    globalState.setTotalQuantity(totalQuantity);
  }, [totalQuantity]);

  return (
    <div className="catalogue">
      <div className="catalogueBanner">
        <h3 className="bannerTitle">#stayhome</h3>
        <h5 className="bannerText">
          Save more money with coupons &amp; up to 60% off!
        </h5>
      </div>
      <div className="catalogueProducts">
        {product.map((item, index) => {
          item.quantity = 1;
          return (
            <>
              <div className="catalogueProduct" key={index}>
                <Link to="/">
                  <img
                    src={item.image}
                    alt="product-img"
                    className="productImage"
                  ></img>
                </Link>
                <div className="productContainer">
                  <h4 className="productTitle">{item.title}</h4>
                  <div className="productPriceBox">
                    <p className="productPrice">
                      <b>${item.price}</b>
                    </p>
                    <button
                      onClick={() => {
                        dispatch({ type: "ADD", payload: item });
                        notify();
                        totalQuantity++;
                      }}
                      className="addToCart"
                    >
                      <ShoppingCart
                        className="shoppingCart"
                        size={22}
                        color="#141a17"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogue;
