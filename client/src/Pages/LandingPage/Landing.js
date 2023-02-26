import React from "react";
import "./Landing.css";
import { HeroTextx } from "../../Components/DynamicData";
import Footer from "../../Components/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";

function Landing() {
  return (
    <>
      <div className="headerContainer">
        <h1 className="logo">
          <span id="logo-int">{HeroTextx?.logo}</span>
          <span id="logo-sec">{HeroTextx?.logo2}</span>
        </h1>
        <div>
          <button className="auth-btn">
            <Link to="/signin" className="authlink">
              {HeroTextx?.login?.name}
            </Link>
          </button>
          <button className="auth-btn">
            <Link to="/signup" className="authlink">
              {HeroTextx?.signup?.name}
            </Link>
          </button>
        </div>
      </div>
      <div className="herosection">
        <div>
          <h3 className="herotitle">{HeroTextx?.heroMsg}</h3>
          <button className="heroCTA">{HeroTextx?.CTA1} </button>
        </div>
        <div className="heroImg">
          <img src="/heroImage2.avif" alt="" />
        </div>
      </div>
      <div className="landingImage">
        <img src="/collegestudents.jpeg" alt="" />
      </div>
      <div className="authform">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Landing;
