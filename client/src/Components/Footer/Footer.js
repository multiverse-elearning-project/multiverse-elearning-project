import React, { useRef } from "react";
import "./Footer.css";
import { HeroTextx } from "../DynamicData";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const thisYear = new Date().getFullYear();

  const stickyref = useRef();
  console.log(stickyref.current);

  return (
    <>
      <div className="footer-container" ref={stickyref}>
        <div className="footer-inner">
          <div className="footer-contact">
            <h5>Contact Us</h5>
            <p>
              <span>Email:</span> {HeroTextx.email}
            </p>
            <p>
              <span>Tel:</span> {HeroTextx.tel}
            </p>
            <p>
              <span>Fax:</span>
              {HeroTextx.fax}
            </p>
            <div className="footer-social">
              <span>Social Media:</span>
              <a href="www.facebook.com">
                <FacebookIcon className="icon" />
              </a>
              <a href="www.twitter.com">
                <TwitterIcon className="icon" />
              </a>
              <a href="www.linkedin.com">
                <LinkedInIcon className="icon" />
              </a>
              <a href="www.instagram.com">
                <InstagramIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="logotxt">
            <h5>
              {HeroTextx.logo}
              {HeroTextx.logo2}
            </h5>
          </div>
        </div>
        <p className="copyrigth">
          &#169;{thisYear > 2023 ? `2023 - ${thisYear}` : "2023"}{" "}
          {HeroTextx.copyRight}
        </p>
      </div>
    </>
  );
}

export default Footer;
