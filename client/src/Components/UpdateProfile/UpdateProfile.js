import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./UpdateProfile.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { MultiverseContext } from "../../ContextApi/contextapi";
import axios from "axios";
import useProfile from "../../Hook/useProfile";
import jwt_decode from "jwt-decode";

function EditProfile() {
  const { auth, setIsEditClicked } = useContext(MultiverseContext);
  const loggedInUserId = jwt_decode(auth.data.accessToken).userInfo.id;
  const [signInError, setSignInError] = useState("");
  const { handleViewProfile } = useProfile();

  const [updatedUser, setUpdatedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatarImage: "",
    bio: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        !updatedUser.email &&
        !updatedUser.password &&
        !updatedUser.firstName &&
        !updatedUser.lastName &&
        !updatedUser.avatarImage
      )
        return setSignInError("Atleast One field has to be filled");
      const response = await axios.patch(
        `http://localhost:8080/signin/${loggedInUserId}`,
        updatedUser
      );
      handleViewProfile(loggedInUserId);
      setIsEditClicked(false);
      if (response.status !== 200) return setSignInError(response.message);
    } catch (error) {
      setSignInError(error.message);
    }
  };

  return (
    <div className={styles.formcontainer}>
      {signInError && <p>signInError</p>}
      <Form onSubmit={submitHandler}>
        <div
          className={styles.signUp_closebtn}
          onClick={() => {
            setIsEditClicked(false);
          }}
        >
          <CloseIcon />
        </div>
        <h3>Edit Profile</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter your first Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter your last Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Must have atleast 6 character and contain one number and spacial
            character.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Bio</Form.Label>
          <textarea
            className={styles.bio}
            rows={3}
            name="bio"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className={styles.avatar}>
          <input
            type="text"
            id="avatar"
            name="avatarImage"
            onChange={handleChange}
          />
        </Form.Group>
        <Button id={styles.signup_btn} type="submit" onClick={submitHandler}>
          Update Account
        </Button>
      </Form>
    </div>
  );
}

export default EditProfile;
