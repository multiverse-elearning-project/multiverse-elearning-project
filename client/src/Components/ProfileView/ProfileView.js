import React, {useContext, useEffect, useState} from 'react'
import styles from'./ProfileView.module.css'
import { MultiverseContext } from '../../ContextApi/contextapi'
import Avatar from '../Avatar/Avatar'
import jwt_decode from 'jwt-decode'
import axios from 'axios'


function ProfileView() {

  //const userCookie = document.cookie
  //console.log(userCookie)
  let storedUser = localStorage.getItem("user");
  // storedUser = JSON.parse(storedUser);
  console.log(storedUser);
  const [info, setInfo] = useState({});
  
  const {setIsEditClicked} = useContext(MultiverseContext)
  //console.log(userInformation)

  useEffect(() => {function getUserInformation() {
    //console.log(userID)
    const info = fetch(`http://localhost:8080/signin/${storedUser}`)
    // const infoData = info.json();
    setInfo(info)
    // console.log(infoData);
    console.log(info)
  }}, [info])

  console.log(info)

  return (
    
    <div>
      {/* <button onClick={() => getUserInformation(storedUser)}></button> */}
      <header>
        <div className={styles.container}>

          <div className={styles.profile}>

            <div className={styles.profile_image}>
              <img src={/*profileImg ||*/ info?.data?.avatarImage || "/defaultAvatar.jpeg"}/>

            </div>

            <div className={styles.profile_user_settings}>

              <h1 className={styles.profile_user_name}>Student</h1>

              <button className={`${styles.btn} ${styles.profile_edit_btn}`} onClick={() => setIsEditClicked(true)}>Edit Profile</button>

              <button className={`${styles.btn} ${styles.profile_settings_btn}`} aria-label="profile settings"><i className={`${styles.fas} ${styles.fa_cog}`} aria-hidden="true"></i></button>

            </div>

            <div className={styles.profile_stats}>

              <ul>
                <li><span className={styles.profile_stat_count}>2</span> Enrolled in</li>
                <li><span className={styles.profile_stat_count}>4</span> Completed</li>

              </ul>

            </div>

            <div className={styles.profile_bio}>

              <p><span className={styles.profile_real_name}>{`${info?.data?.firstName}${info?.data?.lastName}`}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

            </div>

          </div>

        </div>
      </header>
      <body>
        <div className={styles.container}>       

        </div>
      </body>
    </div>
    
  )
}

export default ProfileView