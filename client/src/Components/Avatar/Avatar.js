import React, { useState,useContext } from "react";
import styles from "./Avatar.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { threeDotMenu } from "../DynamicData";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";
import jwt_decode from "jwt-decode";
import axios from "axios";

function Avatar({ profileImg, name }) {

  const [isClicked, setIsClicked] = useState(false);
  const { auth,setUserInfo, userInfo } = useContext(MultiverseContext);
  const loggedInUser = jwt_decode(auth?.data?.accessToken)?.userInfo?.id;

  const handleViewProfile = async (id) => {
    const user = await axios.get(`http://localhost:8080/signin/${id}`);
    setUserInfo(user.data);
  };
console.log(userInfo)
  return (
    <div className={styles.avatarcontainer}>
      <Link to="/profile">
          <div className={styles.avatar} onClick={()=>{handleViewProfile(loggedInUser)}}>
            <img
              src={userInfo?.avatarImage || "/defaultAvatar.jpeg"}
              alt="profile pic"
              className={styles.avatarpic}
            />
          </div>
      </Link>

      <MoreVertIcon
        className={styles.threedots}
        onClick={() => setIsClicked(!isClicked)}
      />
      <ul className={styles.moremenu}>
        {isClicked &&
          threeDotMenu.map((menu, ind) => (
            <li key={ind} className={styles.moremenulist}>
              <Link to={menu.menuLink} className={styles.options}>
                {menu.menuName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Avatar;
