import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <>
      <Form className={styles.contactusContainer}>
        <h3 className={styles.contactus_geading}>
          Have inquiry? send us a message
        </h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button id="sendmsg-btn" className={styles.sendmsg_btn} type="submit">
          Send
        </Button>
      </Form>
    </>
  );
}

export default ContactUs;
