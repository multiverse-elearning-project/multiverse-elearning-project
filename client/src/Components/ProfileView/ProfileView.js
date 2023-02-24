import React, {useContext} from 'react'
import styles from'./ProfileView.module.css'
import { MultiverseContext } from '../../ContextApi/contextapi'
import Avatar from '../Avatar/Avatar'
import cookieParser from "cookie-parser"


function ProfileView() {

  //finish once cookie is set up
  // const user = await User.findByPk()
  let user = { userID: 10,
    firstName: "Jordan",
    lastName: "Hornback",
    password: "Password",
    email: "email",
    avatar: "/collegestudents.jpeg"
  }

  //let enrolledIn = user.getCourses()
  //let completed = user.getCompleted()

  let enrolledIn = 7
  let completed = 5

  const {setIsEditClicked} = useContext(MultiverseContext)

  return (
    
    <div>
      <header>
        <div className={styles.container}>

          <div className={styles.profile}>

            <div className={styles.profile_image}>
              <img src={user.avatar|| "/defaultAvatar.jpeg"}/>

            </div>

            <div className={styles.profile_user_settings}>

              <h1 className={styles.profile_user_name}>{user.firstName + " " + user.lastName}</h1>

              <button className={`${styles.btn} ${styles.profile_edit_btn}`} onClick={() => setIsEditClicked(true)}>Edit Profile</button>

              <button className={`${styles.btn} ${styles.profile_settings_btn}`} aria-label="profile settings"><i className={`${styles.fas} ${styles.fa_cog}`} aria-hidden="true"></i></button>

            </div>

            <div className={styles.profile_stats}>

              <ul>
                <li><span className={styles.profile_stat_count}>Enrolled in </span>{enrolledIn ? enrolledIn : 2}</li>
                <li><span className={styles.profile_stat_count}>Completed </span>{completed ? completed : 4}</li>

              </ul>

            </div>

            <div className={styles.profile_bio}>

              <p><span className={styles.profile_real_name}>Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

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