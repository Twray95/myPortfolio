import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", text: "" });
  const [emailState, setEmailState] = useState(false);
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState({ name: "", email: "", text: "" });
  };

  return (
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
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;

{
  /* <div className="container">
<form className="row">
  <label>Name:</label>
  <input
    type="text"
    placeholder="Name"
    value={formState.name}
    name="name"
    onChange={handleChange}
    className="w-25 p-2 mb-2"
  ></input>
  <label>Email:</label>
  <input
    type="text"
    placeholder="Email"
    value={formState.email}
    name="email"
    onChange={handleChange}
    className="w-25 p-2 mb-2"
  ></input>
  <label>Text:</label>
  <textarea
    type="tex"
    placeholder="Text"
    value={formState.text}
    name="text"
    onChange={handleChange}
    className=""
  ></textarea>
</form>
</div> */
}
