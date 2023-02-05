import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CourseCard.module.css";

function CourseCard({ courseDetail }) {
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
        <Button variant="primary">Enroll</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
