import React, { useContext } from "react";
import styles from "./ProfileView.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";

function ProfileView() {
  const { userInfo } = useContext(MultiverseContext);
  const { setIsEditClicked } = useContext(MultiverseContext);

  const first = userInfo?.firstName;
  const last = userInfo?.lastName;
  const firstName = first?.charAt(0).toUpperCase() + first?.slice(1);
  const lastName = last?.charAt(0).toUpperCase() + last?.slice(1);

  return (
    <div>
      <header>
        <div className={styles.container}>
          <div className={styles.profile}>
            <div className={styles.profile_image}>
              <img src={userInfo?.avatarImage || "/defaultAvatar.jpeg"} alt="user avatar"/>
            </div>
            <div className={styles.profile_user_settings}>
              <h1 className={styles.profile_user_name}>Student</h1>
              <button
                className={`${styles.btn} ${styles.profile_edit_btn}`}
                onClick={() => setIsEditClicked(true)}
              >
                Edit Profile
              </button>
              <button
                className={`${styles.btn} ${styles.profile_settings_btn}`}
                aria-label="profile settings"
              >
                <i
                  className={`${styles.fas} ${styles.fa_cog}`}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <div className={styles.profile_stats}>
              <ul>
                <li>
                  <span className={styles.profile_stat_count}>2</span> Enrolled
                  in
                </li>
                <li>
                  <span className={styles.profile_stat_count}>4</span> Completed
                </li>
              </ul>
            </div>
            <div className={styles.profile_bio}>
              <p>
                <span
                  className={styles.profile_real_name}
                >{`${firstName} ${lastName}`}</span>
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className={styles.container}></div>
      </div>
    </div>
  );
}

export default ProfileView;
