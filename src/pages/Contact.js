import React, { useState } from "react";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from "../components/Footer";
import { Fragment } from "react/cjs/react.production.min";

const Contact = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const [loading, setLoading] = useState(false);

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        "user_GazhN9oB2j0xpoAu8dQuT"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="contact-bg">
        <div id="contact">
          <div className="contact-title">
            <h1>CONTACT</h1>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Row 1 of form */}
              <div className="input-name">
                <input
                  type="text"
                  name="name"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="errorMessage">{errors.name.message}</span>
                )}
              </div>
              <div className="input-email">
                <input
                  type="email"
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  placeholder="Email address"
                />
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              {/* Row 2 of form */}
              <div className="input-subject">
                <input
                  type="text"
                  name="subject"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please enter a subject",
                    },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  placeholder="Subject"
                />
                {errors.subject && (
                  <span className="errorMessage">{errors.subject.message}</span>
                )}

                {/* Row 3 of form */}
              </div>
              <div className="input-message">
                <textarea
                  rows={3}
                  name="message"
                  ref={register({
                    required: true,
                  })}
                  placeholder="Message"
                />
                {errors.message && (
                  <span className="errorMessage">Please enter a message</span>
                )}
              </div>
              <div>
                <button className="submit-btn effect01" type="submit">
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>

            <div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
