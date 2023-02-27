import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./NewCourse.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

function NewCourse() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    // navigate('/dashboard/newcourse_content')
    navigate('/newcourse_card')
  }
  return (
    <>
      <Form className={styles.contactusContainer}>
        <div className={styles.signIn_closebtn} title="close">
          <Link to="/">
            <CloseIcon />
          </Link>
        </div>
        <h3 className={styles.contactus_geading}>Create New Course !</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="enter your first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="enter your last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter the course name or title"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Short decription of the course </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="write a desription in 50 words."
          />
        </Form.Group>
        <Button id="sendmsg-btn" className={styles.sendmsg_btn} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default NewCourse;
