import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TMTHeader = ({ children, className }: Props) => {
  return <h1 className={`text-5xl font-bold ${className}`}>{children}</h1>;
};

export default TMTHeader;
