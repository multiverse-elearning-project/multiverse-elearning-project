import React, { useContext, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./CourseForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";

function CourseForm() {

  const {isCloseClicked, setIsCloseClicked} = useContext(MultiverseContext);
  const [createdCourse, setCreatedCourse] = useState();

  const [formData, setFormData] = useState({
    courseName: "",
    courseType: "",
    coursePrice: 0,
    courseReleaseDate: "",
    description: "",
    userUserID: "12eddd49-ffbb-4784-82a8-232e8f4124dc"


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
    const payload = {...formData};
    const createdNewCourse = await axios.post("http://localhost:8080/courses ", payload);
    setCreatedCourse(createdNewCourse?.data);
  }
  console.log(formData);
  console.log(createdCourse);
  return (
    <> { isCloseClicked && <Form className={styles.contactusContainer}>
        <div className={styles.signIn_closebtn} title="close">
          <Link to="/newcourse">
            <CloseIcon onClick={() => setIsCloseClicked(false)}/>
          </Link>
    
        </div>
        <h3 className={styles.contactus_geading}>Create New Course !</h3>
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
            name="description"
            rows={3}
            placeholder="write a desription in 50 words."
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button id="sendmsg-btn" className={styles.sendmsg_btn} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    }
    </>
  );
}

export default CourseForm;