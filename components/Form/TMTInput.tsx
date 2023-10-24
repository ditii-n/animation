import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import TMTIcon from "../TMTIcon";

interface IFormValues {
  name: string;
  email: string;
  subject: string;
  phone: number;
}

type InputProps = {
  id: string;
  icon: any;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  placeholder?: string;
  className?: string;
};

// The following component is an example of your existing Input Component
const TMTInput = ({ id, icon, label, register, required, placeholder, className }: InputProps) => (
  <div className="form-row">
    <label htmlFor={id}>
      <TMTIcon name={icon} />
    </label>
    <input {...register(label, { required })} placeholder={placeholder} className={className} />
  </div>
);

export default TMTInput;
