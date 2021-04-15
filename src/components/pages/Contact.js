import React from "react";
import { sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";
import email from "../images/email.png";
import "./Contact.css";

export default function ContactUs() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    sendForm(
      "service_4c4lfeh",
      "template_jbhj0ru",
      ".contact-form",
      "user_dnV3hAbNyeMQMtuSggF8u"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <div className="contain">
      <div className="left">
        <img src={email} alt="Email" />
      </div>

      <div className="right">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <span className="text">Name</span>
          <input
            type="text"
            name="name"
            minLength="3"
            maxLength="22"
            required="required"
            aria-invalid={errors.name ? "true" : "false"}
            ref={register({ required: true })}
          />
          {/* {errors.name && errors.name.type === "required" && (
            <div role="alert">
              Name is required
              <br />
            </div>
          )} */}
          <span className="text">Email</span>
          <input
            type="email"
            name="email"
            required="required"
            aria-invalid={errors.email ? "true" : "false"}
            ref={register({ required: true })}
          />
          {/* {errors.email && errors.email.type === "required" && (
            <div role="alert">
              Email is required
              <br />
            </div>
          )} */}
          <span className="text">Message</span>
          <textarea
            name="message"
            maxLength="500"
            required="required"
            aria-invalid={errors.message ? "true" : "false"}
            ref={register({ required: true })}
          />
          {/* {errors.email && errors.email.type === "required" && (
            <div role="alert">
              Message is required
              <br />
            </div>
          )} */}
          <button
            type="submit"
            value="Send"
            className="btn"
            onClick={() => alert("Message sent successfully")}
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
