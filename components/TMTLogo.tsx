/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// import tmtLogo from "../public/img/logo.png";
// import Img from "./Image";

interface Props {
  className?: string;
}

const TMTLogo = ({ className }: Props) => {
  return (
    <div className="w-32 h-fit">
      <Link href="/" passHref>
        {/* <Img src={tmtLogo} alt="TMT Labs Logo" /> */}
        <img src="/img/logo.png" alt="TMT Labs Logo" />
      </Link>
    </div>
  );
};

export default TMTLogo;
