import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { useSelector, useDispatch } from "react-redux";
import { errorMessage, clearMessage } from "../redux/actions/messageAction";
import "../css/Contact.css";
import { ErrorMessage, SuccessMessage } from "./Message";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textValue: "",
  });
  const [borderError1, setBorderError1] = useState(false);
  const [borderError2, setBorderError2] = useState(false);
  const [borderError3, setBorderError3] = useState(false);

  const { name, email, textValue } = formData;

  const { success, error } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  const textArea = (e) => {
    const text =
      "Hi, I think we need a client-side system for our website at Company X. How soon can you hop on to discuss this?";
    if (e.target.textContent === text) {
      setFormData({ ...formData, textValue: "" });
    }
  };

  const contactArea = (e) => {
    if (!e.target.classList.contains("text-area")) {
      if (!textValue) {
        // setFormData({
        //   ...formData,
        //   textValue:
        //     "Hi, I think we need a client-side system for our website at Company X. How soon can you hop on to discuss this?",
        // });
      }
    }

    if (e.target === document.getElementsByName("email")[0] && !email) {
      e.target.placeholder = "";
    } else {
      document.getElementsByName("email")[0].placeholder =
        "Enter your email address";
    }

    if (e.target === document.getElementsByName("name")[0] && !name) {
      e.target.placeholder = "";
    } else {
      document.getElementsByName("name")[0].placeholder = "Enter your name";
    }

    if (e.target === document.getElementsByName("textValue")[0] && !textValue) {
      e.target.placeholder = "";
    } else {
      document.getElementsByName("textValue")[0].placeholder =
        "Hi, I think we need a client-side system for our website at Company X. How soon can you hop on to discuss this?";
    }

    if (e.target === document.getElementsByName("email")[0]) {
      e.target.previousElementSibling.style.color = "#886816";
    } else {
      document.getElementsByName(
        "email"
      )[0].previousElementSibling.style.color = "#b9b8b8";
    }

    if (e.target === document.getElementsByName("name")[0]) {
      e.target.previousElementSibling.style.color = "#886816";
    } else {
      document.getElementsByName("name")[0].previousElementSibling.style.color =
        "#b9b8b8";
    }

    if (e.target === document.getElementsByName("textValue")[0]) {
      e.target.previousElementSibling.style.color = "#886816";
    } else {
      document.getElementsByName(
        "textValue"
      )[0].previousElementSibling.style.color = "#b9b8b8";
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(clearMessage());
    setBorderError1(false);
    setBorderError2(false);
    setBorderError3(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(name) && isEmpty(email) && isEmpty(textValue)) {
      setBorderError1(true);
      setBorderError2(true);
      setBorderError3(true);
    }
    if (isEmpty(name)) {
      setBorderError1(true);
    }
    if (isEmpty(email)) {
      setBorderError2(true);
    }
    if (isEmpty(textValue)) {
      setBorderError3(true);
    }
    if (!isEmpty(name) && !isEmpty(email) && !isEmpty(textValue)) {
      setBorderError1(false);
      setBorderError2(false);
      setBorderError3(false);
    }
  };

  return (
    <div className="contact" onClick={contactArea}>
      <h1>Send me a message!</h1>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>

      <form action="" onSubmit={onSubmit}>
        {error && <ErrorMessage error={error} />}
        {success && <SuccessMessage success={success} />}

        <div className="label">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            autoComplete="off"
            className={`${borderError1 && "border-error"}`}
          />
        </div>
        <div className="label">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            autoComplete="off"
            className={`${borderError2 && "border-error"}`}
          />
        </div>
        <div className="label">
          <label htmlFor="message">Your message</label>
          <textarea
            name="textValue"
            // value={textValue}
            id=""
            cols="30"
            rows="7"
            // onClick={textArea}
            onChange={handleChange}
            className={`"text-area" ${borderError3 && "border-error"}`}
            placeholder="Hi, I think we need a client-side system for our website at Company X. How soon can you hop on to discuss this?"
          ></textarea>
        </div>

        <div className="button">
          <button type="submit">Send Message</button>
          <div className="wipe">
            <p>Send Message</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;