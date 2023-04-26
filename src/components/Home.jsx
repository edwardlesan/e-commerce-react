import React from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";
import { Percent, HandHeart, SealCheck } from "@phosphor-icons/react";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homeContent">
          <h2 className="homeTitle">Super deals</h2>
          <h2 className="homeTitle">For all type of products</h2>
          <h5 className="homeSubtitle">
            Save more with coupons &amp; up to 60% off!
          </h5>
          <Link className="homeButton" to="/">
            Shop Now
          </Link>
        </div>
      </div>

      <div className="homeFeatures">
        <div className="homeFeature">
          <Percent size={50} color="black" />
          <h3 className="homeFeatureTitle">FAIR PRICES</h3>
          <p className="homeFeatureDesc">
            By selling directly to you from our factories, you get a high-end
            product at a great price.
          </p>
        </div>
        <div className="homeFeature">
          <HandHeart size={50} color="black" />
          <h3 className="homeFeatureTitle">MADE WITH INTEGRITY</h3>
          <p className="homeFeatureDesc">
            We wouldn't sell anything we wouldn't use on our own, the products
            are on a high quality.
          </p>
        </div>
        <div className="homeFeature">
          <SealCheck size={50} color="black" />
          <h3 className="homeFeatureTitle">HAPPINESS GUARANTEED</h3>
          <p className="homeFeatureDesc">
            We give you a full 60 days to make sure you absolutely love your
            product, guaranteed.
          </p>
        </div>
      </div>

      <div className="homeTestimonials">
        <h2 className="homeTestimonialsTitle">Trusted by the Celebs</h2>
        <h6 className="homeTestimonialsSubtitle">
          See why famous people around the world are shopping here.
        </h6>
        <div className="homeTestimonialsBox">
          <div className="testimonial">
            <h4 className="testimonialName">Mark Zuckerberg</h4>
            <p className="testimonialNick">@zuck</p>
            <p className="testimonialFunction">Facebook CEO</p>
            <p className="testimonialDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              repellendus corrupti accusantium nobis vel cum autem modi dolore
              architecto enim. Delectus odio fugiat quas laborum id obcaecati
              incidunt nobis optio! Adipisci repellendus corrupti accusantium
              nobis vel cum autem modi dolore architecto enim. Delectus odio
              fugiat quas laborum id obcaecati incidunt nobis optio! Adipisci
              repellendus corrupti accusantium nobis vel cum autem modi dolore
              architecto enim. Delectus odio fugiat quas laborum id obcaecati
              incidunt nobis optio!
            </p>
          </div>
          <div className="testimonial">
            <h4 className="testimonialName">Elon Musk</h4>
            <p className="testimonialNick">@elonmusk</p>
            <p className="testimonialFunction">SpaceX CEO</p>
            <p className="testimonialDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              repellendus corrupti accusantium nobis vel cum autem modi dolore
              architecto enim. Delectus odio fugiat quas laborum id obcaecati
              incidunt nobis optio! Adipisci repellendus corrupti accusantium
              nobis vel cum autem modi dolore architecto enim. Delectus odio
              fugiat quas laborum id obcaecati incidunt nobis optio! Adipisci
              repellendus corrupti accusantium nobis vel cum autem modi dolore
              architecto enim. Delectus odio fugiat quas laborum id obcaecati
              incidunt nobis optio!
            </p>
          </div>
          <div className="testimonial">
            <h4 className="testimonialName">Oleksand Kostyljev</h4>
            <p className="testimonialNick">@s1mpleO</p>
            <p className="testimonialFunction">Professional CS:GO Player</p>
            <p className="testimonialDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              repellendus corrupti accusantium nobis vel cum autem modi dolore
              architecto enim. Delectus odio fugiat quas laborum id obcaecati
              incidunt nobis optio! Adipisci repellendus corrupti accusantium
              nobis vel cum autem modi dolore architecto enim. Delectus odio
              fugiat quas laborum id obcaecati incidunt nobis optio! Adipisci
              repellendus corrupti accusantium nobis vel cum autem modi dolore
              architecto enim. Delectus odio fugiat quas laborum id obcaecati
              incidunt nobis optio!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
