import React from "react";
import TMTIcon from "../components/TMTIcon";
import TMTIconLink from "../components/TMTIconLink";
import TMTLogo from "../components/TMTLogo";
import Link from "next/link";

export default function Footer() {
  const linkIcons = [
    {
      name: "email",
      link: "mailto:infotmtlabs.xyz",
    },
    {
      name: "twitter",
      link: "https://twitter.com/tmtlabs",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/tmtlabs.x",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/tmtlabs",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/tmtlabs",
    },
    {
      name: "medium",
      link: "https://medium.com/@tmtlabs",
    },
    {
      name: "ethereum",
      link: "https://etherscan.io/address/tmtlab.eth",
    },
  ] as const;

  return (
    <footer id="footer" className="bg-cover h-fit w-full flex justify-center">
      <div className="flex md:flex-row flex-col justify-center md:items-end items-center my-[15vh] md:space-x-40 gap-5">
        <TMTLogo />
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-row justify-center items-center gap-2">
            <TMTIcon className="" name="mapMarker" />
            <p>Dubai, United Arab Emirates</p>
          </div>
          <div className="flex flex-row justify-center items-center md:gap-2 gap-3">
            {linkIcons.map((lIcon, i) => (
              <TMTIconLink
                key={`licon${i}`}
                className="icon"
                name={`${lIcon.name}`}
                link={lIcon.link}
              />
            ))}
          </div>
        </div>
        <div className="copyright">
          © 2022 TMT Labs | <Link href="/privacypolicy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
