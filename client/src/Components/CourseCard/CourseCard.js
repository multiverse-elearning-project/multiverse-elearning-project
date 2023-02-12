import axios from "axios";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import styles from "./CourseCard.module.css";
import { MultiverseContext } from "../../ContextApi/contextapi";

function CourseCard({ courseDetail }) {
  const { setEnrollCourse } = useContext(MultiverseContext);
  const navigate = useNavigate()
  const handleEnrollment = (courseId) => {
    const enroll = axios.get(
      "https://course-api.com/javascript-store-products"
    );
    setEnrollCourse(enroll);
    navigate("/course/:courseId");
  };
  return (
    <Card className={styles.courseCard}>
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
        <Button
          variant="primary"
          onClick={() => handleEnrollment(courseDetail.Id)}
        >
          Enroll
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
