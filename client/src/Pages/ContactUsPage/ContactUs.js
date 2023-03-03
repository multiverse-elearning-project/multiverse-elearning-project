import React from "react";
import Contact from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import styles from "./ContactUs.module.css"
function ContactUs() {
  return (
    <div>
      <NavbarMenu />
      <div className={styles.contactus}>
        <Contact />
      </div>
      
      <Footer/>
    </div>
  );
}

export default ContactUs;
