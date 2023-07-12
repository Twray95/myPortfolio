import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", text: "" });
  const [emailState, setEmailState] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextFormState = {
      ...formState,
      [name]: value,
    };
    setFormState(nextFormState);
    console.log(formState);
    if (name === "email") {
      let regex = new RegExp(
        "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
      );
      if (regex.test(value)) {
        setEmailState(true);
      } else {
        setEmailState(false);
      }
    }

    if (formState.name && formState.text && emailState) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState({ name: "", email: "", text: "" });
    setIsFilled(false);
    setEmailState(false);
  };

  return (
    <>
      <Form className="pl-3 pt-3 pr-3" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <FloatingLabel label="Name">
            <Form.Control
              type="name"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
              value={formState.name}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel label="Email Address">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
              value={formState.email}
            />
          </FloatingLabel>
          <Form.Text className="text-danger">
            {emailState ? "" : "Please use a valid email"}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTextarea">
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              name="text"
              placeholder="Comments"
              style={{ height: "100px" }}
              onChange={handleChange}
              value={formState.text}
            />
          </FloatingLabel>
          <Form.Text className="text-danger">
            {isFilled ? "" : "Please fill out the whole form before submitting"}
          </Form.Text>
        </Form.Group>
        {isFilled ? (
          <Button variant="primary" type="submit" onClick={handleShow}>
            Submit
          </Button>
        ) : (
          <Button variant="secondary" type="submit" disabled>
            Submit
          </Button>
        )}
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your submission!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          However this website currently isn't connected to a back end, but I
          appreciate you visiting my portfolio.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;
