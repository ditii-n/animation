import type { NextPage } from "next";
import Hero from "../partials/Hero";
import Nav from "../partials/Nav";
import styles from "../styles/Home.module.css";
import ContactUs from "../partials/ContactUs";
import Partners from "../partials/Partners";
import FooterTemp from "../partials/FooterTemp";

const Test: NextPage = () => {
  const clean = true;
  return (
    <div>
      <Nav />
      <Hero />
      <Partners />
      <ContactUs />
      <FooterTemp />
    </div>
  );
};

export default Test;
