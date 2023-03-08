import React, { useContext, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./CourseForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";
import jwt_decode from "jwt-decode";

function CourseForm() {

  const {isCloseClicked, setIsCloseClicked, auth,setCreatedCourse} = useContext(MultiverseContext);
  const loggedInUser = jwt_decode(auth.data.accessToken).userInfo.id

  const [formData, setFormData] = useState({
    courseName: "",
    courseType: "",
    coursePrice: 0,
    courseReleaseDate: "",
    description: "",
  })
  const handleOnChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setFormData((prev) => {
        return {
          ...prev, [name]:value
        }
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {...formData, userUserID: loggedInUser};
    const createdNewCourse = await axios.post("http://localhost:8080/courses ", payload);
    setCreatedCourse(createdNewCourse?.data);
    setIsCloseClicked(false)
  }

  return (
    <> { isCloseClicked && <Form className={styles.contactusContainer}>
        <div className={styles.signIn_closebtn} title="close">
          <Link to="/newcourse">
            <CloseIcon onClick={() => setIsCloseClicked(false)}/>
          </Link>
        </div>
        <h1 className={styles.contactus_heading}>Create New Course 📕</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Name</Form.Label>
          <Form.Control type="text" name="courseName" placeholder="enter course name" onChange={handleOnChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Type</Form.Label>
          <Form.Control type="text" name="courseType" placeholder="enter course type" onChange={handleOnChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Price</Form.Label>
          <Form.Control type="number" name="coursePrice" placeholder="course price" onChange={handleOnChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Release Date</Form.Label>
          <Form.Control
            type="Date"
            name="courseReleaseDate"
            placeholder="enter course released date"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description </Form.Label>
          <Form.Control
            as="textarea" 
            maxlength="200"
            name="description"
            rows={3}
            placeholder="write a desription in 100 words."
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button id="sendmsg-btn" className={`${styles.sendmsg_btn} ${styles["btn-primary"]}`} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    }
    </>
  );
}

export default CourseForm;