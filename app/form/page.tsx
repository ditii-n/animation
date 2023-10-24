"use client";
import type { NextPage } from "next";
import Nav from "@/partials/Nav";
import Footer from "@/partials/Footer";

const Form: NextPage = () => {
  const clean = true;
  return (
    <div>
      <style jsx>{`
        .logo {
          display: flex;
        }
        iframe {
          frameborder: 0;
          marginheight: 0;
          marginwidth: 0;
          width: 100%;
        }
      `}</style>
      <Nav />

      <div className="googleForm">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfcjgN9d20DWIhw4cJ9A2WQUWK6XqmgC5b8bw0a2CwY055HnA/viewform?embedded=true"
          width="640"
          height="2800"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
