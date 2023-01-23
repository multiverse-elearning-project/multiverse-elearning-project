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
        <h1 className="logo">{HeroTextx?.logo}</h1>
        <div>
          <button className="auth-btn">
            <Link to="/signin" className="authlink">
              {HeroTextx.login.name}
            </Link>
          </button>
          <button className="auth-btn">
            <Link to="/signout" className="authlink">
              {HeroTextx.logout.name}
            </Link>
          </button>
        </div>
      </div>
      <div className="herosection">
        <div>
          <h3 className="herotitle">{HeroTextx?.heroMsg}</h3>
          <button className="heroCTA">{HeroTextx?.CTA1} </button>
        </div>
        <div>
          <img src="/heroImage1.jpeg" alt="" />
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
