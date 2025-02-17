import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { useSelector, useDispatch } from "react-redux";
import {
  errorMessage,
  clearMessage,
  successMessage,
} from "../redux/actions/messageAction";
import "../css/Contact.css";
import { ErrorMessage, SuccessMessage } from "./Message";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import Loading from "./Loading";

const Contact = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textValue: "",
  });
  const [borderError1, setBorderError1] = useState(false);
  const [borderError2, setBorderError2] = useState(false);
  const [borderError3, setBorderError3] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, textValue } = formData;

  const { success, error } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  const api = "https://otunba-portfolio-backend.onrender.com";

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
    setLoading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(name) && isEmpty(email) && isEmpty(textValue)) {
      setBorderError1(true);
      setBorderError2(true);
      setBorderError3(true);
      setLoading(false);
    }

    if (isEmpty(name)) {
      setBorderError1(true);
      setLoading(false);
    }

    if (isEmpty(email) || !isEmail(email)) {
      setBorderError2(true);
      setLoading(false);
    }

    if (!isEmail(email) && !isEmpty(email)) {
      dispatch(errorMessage("Invalid Email"));
      setLoading(false);
      // dispatch(successMessage("sucess"));
    }

    if (isEmpty(textValue)) {
      setBorderError3(true);
      setLoading(false);
    }

    if (!isEmpty(name) && !isEmpty(email) && !isEmpty(textValue)) {
      setBorderError1(false);
      setBorderError2(false);
      setBorderError3(false);
      setLoading(false);
    }

    if (
      !isEmpty(name) &&
      !isEmpty(email) &&
      !isEmpty(textValue) &&
      isEmail(email)
    ) {
      setLoading(true);

      axios
        .post(`${api}/send-email`, { name, email, textValue })
        .then((res) => {
          setFormData({ ...formData, name: "", email: "", textValue: "" });
          setLoading(false);
          dispatch(successMessage("Message succefully sent!!!"));
          const timeout = setTimeout(() => {
            dispatch(clearMessage());
          }, Math.floor(Math.random() * 6000 + 1000));
          return () => clearTimeout(timeout);
        })
        .catch((err) => {
          setLoading(false);
          if (!err.response) {
            return dispatch(errorMessage("No internet connection"));
          }

          if (err.response.data.error) {
            return dispatch(errorMessage(err.response.data.error));
          } else if (
            err.response.statusText === "Internal Server Error" ||
            err.response.data.error === "getaddrinfo ENOTFOUND api.mailgun.net"
          ) {
            return dispatch(errorMessage("Try again later!!!"));
          } else {
            return dispatch(errorMessage("No internet connection"));
          }
        });
    }
  };

  return (
    <div className="contact" onClick={contactArea} ref={contactRef}>
      <p>
        I can help you build, improve, or optimize your web and mobile
        applications for a seamless product experience. Feel free to get in
        touch with me.
      </p>
      <h1>Do You Have Any Ideas</h1>
      <div className="hello">
        <h2>SAY HELLO</h2>
        <a href="mailto:otunbamarcusademola@gmail.com">
          otunbamarcusademola@gmail.com
          <div className="overlay"></div>
        </a>
      </div>
      {/* 
      <form action="" onSubmit={onSubmit}>
        {error && <ErrorMessage error={error} />}
        {success && <SuccessMessage success={success} />}
        {loading && <Loading />}

        <div className="label">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            autoComplete="off"
            className={`${borderError1 && "border-error"}`}
            value={name}
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
            value={email}
          />
        </div>
        <div className="label">
          <label htmlFor="message">Your message</label>
          <textarea
            name="textValue"
            value={textValue}
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
      </form> */}
    </div>
  );
};

export default Contact;
