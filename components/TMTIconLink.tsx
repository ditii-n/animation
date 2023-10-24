import React from "react";
import {
  FaEnvelope,
  FaDiscord,
  FaEthereum,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa";

interface Props {
  className?: string;
  link: string;
  name:
    | "email"
    | "discord"
    | "ethereum"
    | "facebook"
    | "github"
    | "instagram"
    | "linkedin"
    | "medium"
    | "twitter";
}

const TMIconLink = ({ className, link, name }: Props) => {
  return (
    <a className={`${className}`} href={link} target="_blank" rel="noreferrer">
      {name === "email" ? <FaEnvelope /> : null}
      {name === "discord" ? <FaDiscord /> : null}
      {name === "facebook" ? <FaFacebookF /> : null}
      {name === "github" ? <FaGithub /> : null}
      {name === "instagram" ? <FaInstagram /> : null}
      {name === "linkedin" ? <FaLinkedin /> : null}
      {name === "medium" ? <FaMediumM /> : null}
      {name === "twitter" ? <FaTwitter /> : null}
      {name === "ethereum" ? <FaEthereum /> : null}
    </a>
  );
};

export default TMIconLink;
