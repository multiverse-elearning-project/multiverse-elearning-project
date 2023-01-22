import React from "react";
import "./Landing.css";
import { HeroTextx } from "../../Components/DynamicData";
import Footer from "../../Components/Footer/Footer";
import { Link, Outlet } from "react-router-dom";

function Landing() {
  return (
    <>
      <div>
        <div>{HeroTextx?.logo}</div>
        <div>
          <Link to="/signin">{HeroTextx.login.name}</Link>
          <Link to="/signout">{HeroTextx.logout.name}</Link>
        </div>
      </div>
      <div>
        <div>
          <h2>{HeroTextx?.heroMsg}</h2>
          <button>{HeroTextx?.CTA1} </button>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Landing;
