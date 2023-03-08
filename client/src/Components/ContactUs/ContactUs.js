import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./ContactUs.module.css";
import axios from "axios";
import { MultiverseContext } from "../../ContextApi/contextapi";

function ContactUs() {
  const [feedback, setFeedback] = useState({ email: "", message: "" });
  const { setClosefeedback } = useContext(MultiverseContext);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedback((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(feedback);
  const handleFeedback = async (e) => {
    e.preventDefault();
    const payload = { ...feedback };
    console.log(payload);
    const userFeedback = await axios.post(
      "http://localhost:8080/contactus",
      payload
    );
    setClosefeedback(true);
  };
  return (
    <>
      <Form className={styles.contactusContainer}>
        <h3 className={styles.contactus_geading}>
          Have inquiry? send us a message
        </h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button
          id="sendmsg-btn"
          className={styles.sendmsg_btn}
          type="submit"
          onClick={handleFeedback}
        >
          Send
        </Button>
      </Form>
    </>
  );
}

export default ContactUs;
