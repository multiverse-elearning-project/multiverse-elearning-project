import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import styles from "./NewCourseDetail.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";

function NewCourseDetail({CreateCourse}) {
  const navigate = useNavigate();
  const { setNewCourse, setNewCourseDisplay } = useContext(MultiverseContext);
  
  function onFinishHandler(event){
    event.preventDefault()
  }

  function onChangeHandler(event){
    const [formValue, formName] = [event.target.value, event.target.name]
    console.log(formName)
    setNewCourse((prevValue)=>{
         return {
             ...prevValue,
         [formName]:formValue
         }
     })
}
  return (
    <>

  <Form onFinish={onFinishHandler} className={styles.contactusContainer}>
  <div className={styles.signIn_closebtn} title="close">
    <Link to="/dashboard">
      <CloseIcon />
    </Link>
  </div>
  <h3 className={styles.contactus_geading}>Upload Course Content</h3>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Course Name</Form.Label>
    <Form.Control type="text" name="courseName" placeholder="enter your course name" onChange={onChangeHandler}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Chapter</Form.Label>
    <Form.Control type="text" name="lectureName" placeholder="enter chapter No. and name" onChange={onChangeHandler}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Lecture number</Form.Label>
    <Form.Control type="number" placeholder="enter the lecture title" onChange={onChangeHandler}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Lecture Title</Form.Label>
    <Form.Control type="text" placeholder="enter the lecture title" onChange={onChangeHandler}/>
  </Form.Group>
  <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Decription of the lecture </Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      name="descriptio"
      placeholder="write a desription in 50 words."
      onChange={onChangeHandler}/>
    <Form.Label className={styles.fileupload}>Add ImageUrl</Form.Label>
    <Form.Control type="text" name="lectureUrl" placeholder="enter lectureUrl here" id="lectureUrl" required onChange={onChangeHandler}/>
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
          <Button id="finishmsg-btn" className={styles.finishmsg_btn} type="submit" onClick={()=>{setNewCourseDisplay(true); CreateCourse()}}>
            Finish
          </Button>
        </Link>
</Form>
</>
)

}

export default NewCourseDetail;