import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", text: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;

    const nextFormState = {
      ...formState,
      [name]: value,
    };
    setFormState(nextFormState);

    if (name === "email") {
      console.log("email");
    }
  };

  const handleFormSubmit = () => {};

  return (
    <div className="container">
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
    </div>
  );
}

export default Contact;
