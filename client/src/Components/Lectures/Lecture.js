import React, { useContext } from "react";
import styles from "./Lecture.module.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { MultiverseContext } from "../../ContextApi/contextapi";
import axios from "axios";

function Lecture({ data, modul }) {
  const { id, lectureID, lectureName, lectureDuration } = data;
  const {
    ismoduleClick,
    SetSelectedLecture,
    isLectureClicked,
    setIsLectureClicked,
  } = useContext(MultiverseContext);

  const viewLecture = async(lectId) => {
    const lectureclicked = isLectureClicked === lectId;
    if (!lectureclicked) {
      setIsLectureClicked(lectId);
    }
    // if (isLectureClicked === lectId) {
      const Lecture =await axios.get(
        `http://localhost:8080/courses/modules/lectures/${lectId}`
      );
      console.log(Lecture.data)
      SetSelectedLecture(Lecture.data);
    // }
  };

  const clickCheck = ismoduleClick?.includes(modul?.moduleID);
  console.log(isLectureClicked)
  return (
    <>
      {clickCheck && (
        <div
          key={lectureID}
          className={`${styles.lecturecontainer} ${
            ismoduleClick.clicked === false && styles.hideLectures
          }`}
          onClick={()=>viewLecture(lectureID)}
        >
          <p className={styles.lecturetitle}>
            <input type="checkbox" className={styles.checkbox} />
            {`${id} - ${lectureName}`}
          </p>
          <p>
            <PlayCircleIcon /> {lectureDuration}
          </p>
        </div>
      )}
    </>
  );
}

export default Lecture;
