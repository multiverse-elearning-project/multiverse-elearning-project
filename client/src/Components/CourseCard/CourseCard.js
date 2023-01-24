import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CourseCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
      <Card.Body>
        <Card.Title>React</Card.Title>
        <Card.Text>
          Some quick example text about the course and make up the bulk of the
          card's content.
        </Card.Text>
        <Button variant="primary">Enroll</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
