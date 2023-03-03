import React, { useState } from "react";
import styles from "./Avatar.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { threeDotMenu } from "../DynamicData";
import { Link } from "react-router-dom";
import axios from "axios";
function Avatar({ profileImg, name }) {
  const [isClicked, setIsClicked] = useState(false);
  const [thisUser, setThisUser] = useState({});

  const storedUser = localStorage.getItem("user");

  function getUserInfo(id) {
    const response = axios.get(`http://localhost:8080/signin/${id}`);
    console.log(response);
    if (response) {
      setThisUser(response.data);
    }
    
  }
  
  return (
    <div className={styles.avatarcontainer}>
      <Link to="/profile">
        <div className={styles.avatar} onClick={() => {getUserInfo(storedUser)}}>
          <img
            src={profileImg || "/defaultAvatar.jpeg"}
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
