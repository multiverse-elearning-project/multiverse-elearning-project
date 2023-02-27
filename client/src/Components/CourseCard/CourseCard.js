import axios from "axios";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styles from "./CourseCard.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";

function CourseCard({ courseDetail }) {
  const { setEnrollCourse, userID, setSelectedCourse } =
    useContext(MultiverseContext);
  const navigate = useNavigate();

  const handleEnrollment = async (courseId) => {
    try {
      const enroll = await axios.get(
        "https://course-api.com/javascript-store-products"
      );
      setEnrollCourse(enroll);
      // navigate(`/course/${enroll?.id || 1}`);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEnrolledCourse = async (selectedId) => {
    const enrolledCourse = await axios.get(
      `http://localhost:8080/courses/${selectedId}`
    );
    if (enrolledCourse.data) setSelectedCourse(enrolledCourse?.data);
    navigate(`/course/${selectedId || 1}`);
  };
  return (
    <div className={styles.courseCard}>
      <Card className={styles.innercourseCard}>
        <div className="ratio ratio-16x9">
          <iframe
            src={courseDetail?.vedioUrl}
            title={courseDetail?.coursetittle}
            allowFullScreen
          ></iframe>
        </div>
        <Card.Body>
          <Card.Title>{courseDetail?.coursetittle}</Card.Title>
          <Card.Text>{courseDetail?.coursedescr}</Card.Text>
          <div className={styles["price-creator"]}>
            <p
              className={styles["createdby"]}
            >{`By: ${courseDetail?.creator}`}</p>
            <p className={styles["courseprice"]}>{`$${courseDetail?.price}`}</p>
          </div>
          <Button
            variant="primary"
            onClick={() => {
              fetchEnrolledCourse(courseDetail.Id);
              handleEnrollment(courseDetail.Id);
            }}
          >
            Enroll
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseCard;
