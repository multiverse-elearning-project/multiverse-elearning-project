import React, { useRef } from "react";
import styles from "./Footer.module.css";
import { HeroTextx } from "../DynamicData";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_contact}>
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
            <div className={styles.footer_social}>
              <span>Social Media:</span>
              <span>
                <a href="www.facebook.com">
                  <FacebookIcon className={styles.icon} />
                </a>
                <a href="www.twitter.com">
                  <TwitterIcon className={styles.icon} />
                </a>
                <a href="www.linkedin.com">
                  <LinkedInIcon className={styles.icon} />
                </a>
                <a href="www.instagram.com">
                  <InstagramIcon className={styles.icon} />
                </a>
              </span>
            </div>
          </div>
          <div className={styles.logotxt}>
            <h5>
              {HeroTextx.logo}
              {HeroTextx.logo2}
            </h5>
          </div>
        </div>
        <p className={styles.copyrigth}>
          &#169;{thisYear > 2023 ? `2023 - ${thisYear}` : "2023"}{" "}
          {HeroTextx.copyRight}
        </p>
      </div>
    </>
  );
}

export default Footer;
