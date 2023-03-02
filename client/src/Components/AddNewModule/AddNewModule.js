import React, { useContext, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./AddNewModule.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";

function AddNewModule() {

  const { addModule, setAddModule } = useContext(MultiverseContext);

  const [ moduleResponse, setModuleResponse ] = useState();

  const [moduleData, setModuleData] = useState({
    moduleName: "",
    moduleUrl: "",
    excersices: "",
    description: "",
    courseCourseID: "a1e93197-32f7-4b6c-858c-67edbf492cd7"
  })
  const handleOnChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setModuleData((prev) => {
        return {
          ...prev, [name]:value
        }
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {...moduleData};
    const newModule = await axios.post("http://localhost:8080/modules", payload);
    setModuleResponse(newModule?.data);
  }
  console.log(moduleResponse);

  return (
    <> { addModule && <Form className={styles.contactusContainer}>
        <div className={styles.signIn_closebtn} title="close">
          <Link to="/newcourse">
            <CloseIcon onClick={() => setAddModule(false)}/>
          </Link>
    
        </div>
        <h3 className={styles.contactus_geading}>Create New Module !</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Module Name</Form.Label>
          <Form.Control type="text" name="moduleName" placeholder="enter module name" onChange={handleOnChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Module Url</Form.Label>
          <Form.Control type="text" name="moduleUrl" placeholder="enter module Url" onChange={handleOnChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Module Excersice</Form.Label>
          <Form.Control type="text" name="excersices" placeholder="excersices" onChange={handleOnChange}/>
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
        <Button id="sendmsg-btn" className={styles.sendmsg_btn} type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    }
    </>
  );
}

export default AddNewModule;