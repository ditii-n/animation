import React from "react";
import SubcribeForm from "../components/Form/SubscribeForm";
import TMTIcon from "../components/TMTIcon";
import TMTIconLink from "../components/TMTIconLink";
import TMTLogo from "../components/TMTLogo";
import Link from "next/link";

export default function FooterTemp() {
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
    <footer id="footer" className="footer">
      <div className="content">
        <TMTLogo />
        <div className="links">
          <div className="location">
            <TMTIcon className="mapIcon" name="mapMarker" /> Dubai, United Arab Emirates
          </div>
          <div className="icons">
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
        <div className="subscribe">
          <p>Subcribe to the TMT Labs Newsletter</p>
          <SubcribeForm />
        </div>
      </div>
      <div className="copyright">
        © 2022 TMT Labs | <Link href="/privacypolicy" passHref>Privacy Policy
              </Link>
      </div>
    </footer>
  );
}
