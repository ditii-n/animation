import React from "react";
import { FaDiscord, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { BsArrowRight, BsPhone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

interface Props {
  className? : string;
  name: "arrow-r" | "email" | "discord" | "mapMarker" | "phone" | "star" | "user";
}

const TMTIcon = ({ className, name }: Props) => {
  const iconStyle = `icon ${className}`;

  return (
      <>
        {name === "arrow-r" ? <BsArrowRight className={iconStyle} /> : null}
        {name === "email" ? <MdAlternateEmail className={iconStyle} /> : null}
        {name === "mapMarker" ? <FaMapMarkerAlt className={iconStyle} /> : null}
        {name === "discord" ? <FaDiscord className={iconStyle} /> : null}
        {name === "phone" ? <BsPhone className={iconStyle} /> : null}
        {name === "star" ? <AiOutlineStar className={iconStyle} /> : null}
        {name === "user" ? <AiOutlineUser className={iconStyle} /> : null}
      </>
  );
}

export default TMTIcon;