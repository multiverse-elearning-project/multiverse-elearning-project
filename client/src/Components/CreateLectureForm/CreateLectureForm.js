import React, { useContext, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./CreateLectureForm.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";

function CreateLectureForm() {
  const { addLecture, setAddLecture, addToModuleID } =
    useContext(MultiverseContext);
  const [createdLecture, setCreatedLecture] = useState();

  const [lectureData, setLectureData] = useState({
    id: "",
    lectureName: "",
    lectureUrl: "",
    lectureDuration: "",
    description: "",
    
  });
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLectureData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...lectureData,moduleModuleID: addToModuleID, };
    const createdNewLecture = await axios.post(
      "http://localhost:8080/courses/modules/lectures",
      payload
    );
    setCreatedLecture(createdNewLecture?.data);
    setAddLecture(false)
  };
  console.log(lectureData);
  console.log(createdLecture);

  return (
    <>
      {" "}
      {addLecture && (
        <Form className={styles.contactusContainer}>
          <div className={styles.signIn_closebtn} title="close">
            <Link to="/newcourse">
              <CloseIcon onClick={() => setAddLecture(false)} />
            </Link>
          </div>
          <h3 className={styles.contactus_heading}>Create New Lecture 🗒️ 🎵</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lecture Id</Form.Label>
            <Form.Control
              type="number"
              name="id"
              placeholder="enter course id"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lecture Title</Form.Label>
            <Form.Control
              type="text"
              name="lectureName"
              placeholder="enter lecture title"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lecture Url</Form.Label>
            <Form.Control
              type="text"
              name="lectureUrl"
              placeholder="add lecture Url"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lecture Duration</Form.Label>
            <Form.Control
              type="text"
              name="lectureDuration"
              placeholder="add lecture duration"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description </Form.Label>
            <Form.Control
              as="textarea"
              maxlength="100"
              name="description"
              rows={3}
              placeholder="write a desription in 50 words."
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button
            id="sendmsg-btn"
            className={styles.sendmsg_btn}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      )}
    </>
  );
}

export default CreateLectureForm;
