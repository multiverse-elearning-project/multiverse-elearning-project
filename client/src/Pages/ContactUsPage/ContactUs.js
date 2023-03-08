import React, { useContext } from "react";
import Contact from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import NavbarMenu from "../../Components/Navbar/Navbar";
import styles from "./ContactUs.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";

function ContactUs() {
  const { closefeedback } = useContext(MultiverseContext);

  return (
    <div>
      <NavbarMenu />
      <div className={styles.contactus}>
        {!closefeedback ? <Contact /> : <SuccessModal />}
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
