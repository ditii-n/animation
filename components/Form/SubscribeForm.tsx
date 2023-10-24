import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import axios from "axios";

export default function SubcribeForm() {
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
  });

  const subscribe = () => {
    setLoading(true);
    axios
      .put("api/subscribe", {
        mail,
      })
      .then((result) => {
        if (result.status >= 200 && result.status < 300) {
          setLoading(false);
          setMail("");
          setMessage(result.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.data.message);
        setLoading(false);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (e: any) => {
    console.log("Form Submitted: ", e);
    alert("Form still not complete, but thanks for trying out the form 😄");
  };

  return (
    <form onSubmit={handleSubmit(subscribe)}>
      <div className="subscribe">
        <div className={"form-row" + (errors.email ? " is-invalid" : "")}>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <Button type="submit" onClick={() => console.log("Subscibr clicked")}>
            {!loading ? "Subscribe" : "loading..."}
          </Button>
        </div>
        {errors.email ? <div className="invalid-feedback">errors.email?.message</div> : null}
        {message ? <div>{message}</div> : null}
      </div>
    </form>
  );
}
