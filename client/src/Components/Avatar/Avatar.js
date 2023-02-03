import React, { useState } from "react";
import styles from "./Avatar.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { threeDotMenu } from "../DynamicData";
import {Link} from "react-router-dom";
function Avatar({ profileImg, name }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.avatarcontainer}>
      <Link to="/profile">
        <div className={styles.avatar}>
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
              {menu}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Avatar;
