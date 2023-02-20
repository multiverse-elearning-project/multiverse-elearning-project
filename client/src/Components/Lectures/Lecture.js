import React from "react";
import styles from "./Lecture.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Lecture({ data }) {
  const viewLecture =()=>{

  }
  return (
    <div className={styles.lecturecontainer} onClick={viewLecture}>
      <p className={styles.lecturetitle}>
        <input type="checkbox" className={styles.checkbox} />
        {`${data.id} - ${data.lecturetitle}`}
      </p>
      <p>
        <PlayCircleIcon /> {data.time}
      </p>
    </div>
  );
}

export default Lecture;
