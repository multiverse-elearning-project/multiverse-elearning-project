import React, { useContext } from "react";
import ProfileView from "../../Components/ProfileView/ProfileView";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import UpdateProfile from "../../Components/UpdateProfile/UpdateProfile";
import styles from "./Profile.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";

function Profile() {
  const { isEditClicked } = useContext(MultiverseContext);

  return (
    <div>
      <Navbar />
      <div className={styles.profilebody}>
        <ProfileView />
      </div>

      {isEditClicked ? <UpdateProfile /> : null}
      <div className={""}>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
