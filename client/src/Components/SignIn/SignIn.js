import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MultiverseContext } from "../../ContextApi/contextapi";

function SignIn() {
  const navigate = useNavigate();
  const {setAuth} = useContext(MultiverseContext)
  const [existingUser, setExistingUser] = useState({
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExistingUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
 
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!existingUser.email || !existingUser.password)
        return setSignInError("Incorrect password or user name!");
      const response = await axios.post(
        "http://localhost:8080/signin",
        existingUser
      );
      await setAuth(response)
      if (response.status !== 200) return setSignInError(response.message);
      navigate("/dashboard", { replace: false });
    } catch (error) {
      setSignInError(error.message);
    }
  };
  return (
    <div className={styles.SignIn_wrapper}>
      <div className={styles.signIn_closebtn} title="close">
        <Link to="/">
          <CloseIcon />
        </Link>
      </div>
      
      <Form onSubmit={submitHandler}>
        <h3 className="login-header">Log In</h3>
        {signInError && <p className="signInError">{signInError}</p>}
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button id={styles.signin_btn} type="submit">
          SignIn
        </Button>
        <div>
          <Link to={"/signup"}>Create a new account</Link>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
