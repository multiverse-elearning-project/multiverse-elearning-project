import React, {useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styles from "./UpdateProfile.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { MultiverseContext } from "../../ContextApi/contextapi";
import axios from "axios";


function EditProfile() {

    const {setIsEditClicked} = useContext(MultiverseContext) 

    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userBio, setUserBio] = useState("")
    const [userAvatar, setUserAvatar] = useState("")

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
   // const {firstName, lastName, email, password, bio, avatar} = req.body
    const myRequest = axios.patch("", {userFirstName, userLastName, userEmail, userPassword, userBio, userAvatar})
    console.log({userFirstName, userLastName, userEmail, userPassword, userBio, userAvatar})
    setIsEditClicked(false)
    navigate("/profile");
  };

 // useEffect(() => {document.getElementById("avatar").innerHTML = "Change your avatar"}, [])
  

  return (
    <div className={styles.formcontainer}>
      <Form onSubmit={submitHandler}>
        <div className={styles.signUp_closebtn} onClick={() => {setIsEditClicked(false)}}>
            <CloseIcon />
        </div>
        <h3>Edit Profile</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first Name"  onChange={(e) => {setUserFirstName(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last Name"  onChange={(e) => {setUserLastName(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e) => {setUserEmail(e.target.value)}}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e) => {setUserPassword(e.target.value)}}/>
          <Form.Text className="text-muted">
            Must have atleast 6 character and contain one number and spacial
            character.
          </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Bio</Form.Label>
            <textarea className={styles.bio} rows={3}  onChange={(e) => {setUserBio(e.target.value)}}/>
        </Form.Group>
        <Form.Group className={styles.avatar}>
            <input type="file" id="avatar"  onChange={(e) => {setUserAvatar(e.target.value)}}/>
        </Form.Group>
        <Button id={styles.signup_btn} type="submit" onClick={submitHandler}>
          Update Account
        </Button>
      </Form>
    </div>
  );
}

export default EditProfile;
