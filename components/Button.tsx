import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, className, onClick, type = "button" }: Props) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
