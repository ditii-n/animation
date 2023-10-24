import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../components/Button";
import TMTIcon from "../components/TMTIcon";

export default function ContactUs() {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    phone: yup
      .string()
      .required("Number is required")
      .matches(/(^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$)/, "Number is invalid"),
    subject: yup.string(),
    message: yup.string().required("Message is required"),
    // acceptTerms: yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (e: any) => {
    // e.preventDefault();
    console.log("Form Submitted: ", e);
    alert("Form still not complete, but thanks for trying out the form 😄");
  };

  return (
    <section id="contact" className="contact">
      <div className="content">
        <h2 className="title">Get in touch</h2>
        <div className="inner">
          <div className="form-main">
            <p>
              If you've got an idea, we can help make it a reality. Get in touch by filling out your
              details below.
            </p>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="form-group col1">
                <div className={"form-row" + (errors.name ? " is-invalid" : "")}>
                  <label htmlFor="name">
                    <TMTIcon name="user" />
                  </label>
                  <div className="input">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      {...register("name")}
                    />
                    {errors.name ? (
                      <div className="invalid-feedback">errors.name?.message</div>
                    ) : null}
                  </div>
                </div>
                <div className={"form-row" + (errors.email ? " is-invalid" : "")}>
                  <label htmlFor="email">
                    <TMTIcon name="email" />
                  </label>
                  <div className="input">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      {...register("email")}
                    />
                    {errors.email ? (
                      <div className="invalid-feedback">errors.email?.message</div>
                    ) : null}
                  </div>
                </div>
                <div className={"form-row" + (errors.phone ? " is-invalid" : "")}>
                  <label htmlFor="phone">
                    <TMTIcon name="phone" />
                  </label>
                  <div className="input">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                      {...register("phone")}
                    />
                    {errors.phone ? (
                      <div className="invalid-feedback">errors.phone?.message</div>
                    ) : null}
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="subject">
                    <TMTIcon name="star" />
                  </label>
                  <div className="input">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Enter your subject"
                      {...register("subject")}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group col2">
                <div className={"form-row" + (errors.message ? " is-invalid" : "")}>
                  <textarea
                    className="form-control message"
                    id="message"
                    rows={9}
                    placeholder="Enter your message"
                    {...register("message")}
                  ></textarea>
                  {errors.message ? (
                    <div className="invalid-feedback">errors.message?.message</div>
                  ) : null}
                  <br />
                </div>
                <div className="form-row">
                  <Button
                    type="submit"
                    className="form-button"
                    onClick={() => console.log("Submit Clicked")}
                  >
                    Send <TMTIcon className="buttonicon" name="arrow-r" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="form-icon">
            <img src="/img/icon-large.png" alt="TMT Labs Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
