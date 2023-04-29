import React from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";
import {
  Percent,
  HandHeart,
  SealCheck,
  MapTrifold,
  Envelope,
  Phone,
  Clock,
} from "@phosphor-icons/react";

const Home = () => {
  return (
    <>
      <section className="homeTop">
        <div className="homeContainer">
          <div className="homeContent">
            <h2 className="homeTitle">Super deals</h2>
            <h2 className="homeTitle">For all type of products</h2>
            <h5 className="homeSubtitle">
              Save more with coupons &amp; up to 60% off!
            </h5>
            <Link className="homeButton" to="/catalogue">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="homeFeatures">
          <div className="homeFeature">
            <Percent size={50} color="#c4ebc8" />
            <h3 className="homeFeatureTitle">FAIR PRICES</h3>
            <p className="homeFeatureDesc">
              By selling directly to you from our factories, you get a high-end
              product at a great price.
            </p>
          </div>
          <div className="homeFeature">
            <HandHeart size={50} color="#c4ebc8" />
            <h3 className="homeFeatureTitle">MADE WITH INTEGRITY</h3>
            <p className="homeFeatureDesc">
              We wouldn't sell anything we wouldn't use on our own, the products
              are on a high quality.
            </p>
          </div>
          <div className="homeFeature">
            <SealCheck size={50} color="#c4ebc8" />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci repellendus corrupti accusantium nobis vel cum autem
                modi dolore architecto enim. Delectus odio fugiat quas laborum
                id obcaecati incidunt nobis optio!
              </p>
            </div>
            <div className="testimonial">
              <h4 className="testimonialName">Elon Musk</h4>
              <p className="testimonialNick">@elonmusk</p>
              <p className="testimonialFunction">SpaceX CEO</p>
              <p className="testimonialDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci repellendus corrupti accusantium nobis vel cum autem
                modi dolore architecto enim. Delectus odio fugiat quas laborum
                id obcaecati incidunt nobis optio!
              </p>
            </div>
            <div className="testimonial">
              <h4 className="testimonialName">Oleksand Kostyljev</h4>
              <p className="testimonialNick">@s1mpleO</p>
              <p className="testimonialFunction">Professional CS:GO Player</p>
              <p className="testimonialDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci repellendus corrupti accusantium nobis vel cum autem
                modi dolore architecto enim. Delectus odio fugiat quas laborum
                id obcaecati incidunt nobis optio!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homeContact">
        <div className="contactBanner">
          <h3 className="bannerTitle">#lets_talk</h3>
          <h5 className="bannerText">
            Leave a message, we love to hear from you!
          </h5>
        </div>
        <div className="contactContent">
          <div className="contactAddress">
            <p>GET IN TOUCH</p>
            <h2>Visit one of our agency locations or contact us today</h2>
            <div className="contactList">
              <li>
                <MapTrifold size={16}></MapTrifold>
                <p>510 Downers Groove, Street 65, Chicago</p>
              </li>
              <li>
                <Envelope size={16}></Envelope>
                <p>shopping@gmail.com</p>
              </li>
              <li>
                <Phone size={16}></Phone>
                <p>+01 2222 365 / (+91) 01 2345 6789</p>
              </li>
              <li>
                <Clock size={16}></Clock>
                <p>10:00 - 18:00. Mon - Sat</p>
              </li>
            </div>
          </div>
          <div className="contactMessage">
            <form>
              <p>Leave a message</p>
              <h2>We love to hear from you</h2>
              <input type="text" placeholder="Name & Surname"></input>
              <input type="email" placeholder="E-mail"></input>
              <textarea
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
              <button className="homeButton">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
