import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="SignIn-wrapper">
      <div className="signIn-closebtn" title="close">
        <Link to="/">
          <CloseIcon />
        </Link>
      </div>

      <Form onSubmit={onSubmitHandler}>
        <h3 className="login-header">Log In</h3>
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button id="signin-btn" type="submit">
          SignIn
        </Button>
        <div>
          <Link to={"/signout"}>Create a new account</Link>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
