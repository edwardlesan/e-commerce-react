import React, { useState, useEffect, useContext } from "react";
import "./Product.css";
import { Cartcontext } from "./Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ShoppingCart, ArrowBendUpLeft } from "phosphor-react";

const notify = () => {
  toast.success("Product added succesfully!", {
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

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const globalState = useContext(Cartcontext);
  const state = globalState.state;
  const dispatch = globalState.dispatch;

  var totalQuantity = state.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);

  useEffect(() => {
    globalState.setTotalQuantity(totalQuantity);
  }, [totalQuantity]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = res.data;
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, []);

  function LoadingSpinner() {
    return (
      <section class="ctnr">
        <div class="ldr">
          <div class="ldr-blk"></div>
          <div class="ldr-blk an_delay"></div>
          <div class="ldr-blk an_delay"></div>
          <div class="ldr-blk"></div>
        </div>
      </section>
    );
  }

  const ShowProduct = () => {
    return (
      <div className="singleProductPage">
        <div className="singleProductContainer">
          <img className="singleProductImg" src={product.image} alt=""></img>
          <div className="singleProductContent">
            <p className="singleProductCateg">{product.category}</p>
            <h2 className="singleProductTitle">{product.title}</h2>
            <p className="singleProductDesc">{product.description}</p>
            <div className="singlePriceContainer">
              <h4 className="singleProductPrice">${product.price}</h4>
              <div className="buttonContainer">
                <Link className="goBack" to="/">
                  <ArrowBendUpLeft size={35} color="#141a17" />
                </Link>
                <button
                  onClick={() => {
                    dispatch({ type: "ADD", payload: product });
                    notify();
                    totalQuantity++;
                  }}
                  className="addToCart"
                >
                  <ShoppingCart
                    className="shoppingCart"
                    size={35}
                    color="#141a17"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <LoadingSpinner /> : <ShowProduct />}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
