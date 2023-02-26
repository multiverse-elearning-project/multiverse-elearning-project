import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./SignUp.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [regError, setRegError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
    
  };
  console.log(newUser)
  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.email ||
      !newUser.password
    )
      return setRegError("Please fill all required fields!");
    await axios.post('http://localhost:8080/signup', newUser);
    navigate("/dashboard");
  };
  return (
    <div className="formcontainer">
      <Form onSubmit={submitHandler}>
        <div className="signUp-closebtn">
          <Link to="/">
            <CloseIcon />
          </Link>
        </div>
        <h3>Sign Up</h3>
        <h5>
          Already have an account? <Link to="/signin">Sign In</Link>
        </h5>
        {regError && <p className="regError">{regError}</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first Name"
            name="firstName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last Name"
            name="lastName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
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
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Must have atleast 6 character and contain one number and spacial
            character.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree with terms and conditions of Multiverse E-learning platform usage."
          />
        </Form.Group>
        <Button id="signup-btn" type="submit">
          Create an Account
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
