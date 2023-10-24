import React from "react";
import TMTLogo from "../components/TMTLogo";

export default function NavEmpty() {
  return (
    <nav>
      <TMTLogo />
      <div className="items"></div>
    </nav>
  );
}
