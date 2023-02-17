import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className={styles.formcontainer}>
      <Form onSubmit={submitHandler}>
        <div className={styles.signUp_closebtn}>
          <Link to="/">
            <CloseIcon />
          </Link>
        </div>
        <h3>Sign Up</h3>
        <h5>
          Already have an account? <Link to="/signin">Sign In</Link>
        </h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
        <Button id={styles.signup_btn} type="submit">
          Create an Account
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
