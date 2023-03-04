import React, { useContext } from "react";
import ProfileView from "../../Components/ProfileView/ProfileView"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import UpdateProfile from "../../Components/UpdateProfile/UpdateProfile"
import { MultiverseContext } from "../../ContextApi/contextapi";


function Profile() {

  const {isEditClicked} = useContext(MultiverseContext)

  return <div>
    <Navbar />
    <ProfileView />
    {isEditClicked ? <UpdateProfile /> : null}
    <Footer />
    </div>;
}

export default Profile;
