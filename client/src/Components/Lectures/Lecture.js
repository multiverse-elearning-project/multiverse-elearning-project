import React from "react";
import styles from "./Lecture.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Lecture({ data }) {
  return (
    <div className={styles.lecturecontainer}>
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
