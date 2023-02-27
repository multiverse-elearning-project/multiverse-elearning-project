import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import styles from "./NewCourseDetail.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function NewCourseDetail() {
  const navigate = useNavigate();
  return (
    <>
  
  <Form className={styles.contactusContainer}>
  <div className={styles.signIn_closebtn} title="close">
    <Link to="/dashboard">
      <CloseIcon />
    </Link>
  </div>
  <h3 className={styles.contactus_geading}>Upload Course Content</h3>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Course Name</Form.Label>
    <Form.Control type="text" placeholder="enter your course name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Chapter</Form.Label>
    <Form.Control type="text" placeholder="enter chapter No. and name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Lecture number</Form.Label>
    <Form.Control type="number" placeholder="enter the lecture title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Lecture Title</Form.Label>
    <Form.Control type="text" placeholder="enter the lecture title" />
  </Form.Group>
  <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Decription of the lecture </Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      placeholder="write a desription in 50 words."
    />
    <div className={styles.fileupload}>
      <label htmlFor=""></label>
      <input type="file" id="myFile" name="filename" required />
    </div>
  </Form.Group>
    <Button
          variant="primary"
          onClick={() => {
            navigate('/newcourse_card')
            // handleEnrollment(courseDetail.Id);
            // enrollUser();

          }}
        >
          +
        </Button>
      
        <Link to="/dashboard">
          <Button id="finishmsg-btn" className={styles.finishmsg_btn} type="submit">
            Finish
          </Button>
        </Link>
</Form>
</>
)
     
}

export default NewCourseDetail;