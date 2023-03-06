import React,{useContext} from "react";
import Contact from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import styles from "./ContactUs.module.css"
import { MultiverseContext } from "../../ContextApi/contextapi";
function ContactUs() {
  const {auth} = useContext(MultiverseContext)
  console.log(auth)
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
