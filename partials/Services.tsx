/* eslint-disable @next/next/no-img-element */
import React from "react";
import ServiceCard from "../components/ServiceCard";
import TMTHeader from "@/components/TMTHeader";

export default function Services() {
  const serviceItems = [
    {
      colour: "turquoise",
      imageName: "dev",
      name: "Smart Contract Devlopment & Auditing",
      points: [
        "Smart Contract",
        "Ethereum and Polygon Blockchain",
        "Smart Contract Auditing",
        "Web 3.0 Development",
        "Minting Dapp",
        "Website Development",
      ],
    },
    {
      colour: "red",
      imageName: "art",
      name: "NFT Branding & Development",
      points: [
        "Brand Design",
        "NFT Art Creation",
        "Artist & Art Management",
        "Art Generation",
        "Roadmap Design",
        "Brand Collateral",
      ],
    },
    {
      colour: "purple",
      imageName: "community",
      name: "Community Management",
      points: [
        "Discord Architecture",
        "Discord Server/Community Creation",
        "Community Management",
        "Moderator Hiring & OnBoarding",
        "Bot Creation & Management",
        "Bot Integration",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="bg-cover min-h-fit w-full flex justify-center"
    >
      <div className="flex flex-col  justify-center gap-5 md:w-9/12 w-10/12 md:my-[15vh] my-10">
        {/* <h2 className="text-3xl font-bold">Services we offer</h2> */}
        <span className="grid md:grid-cols-2 mb-8 md:gap-0 gap-5 items-center">
          <TMTHeader>Services we offer</TMTHeader>
          <img src="/img/header-icon/Services-header.png" alt="" />
        </span>
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-[10px]">
          {serviceItems.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* footer */}
        <div className="grid md:grid-cols-2 grid-row-2 justify-center gap-7 mt-14">
          <div className="hover:brightness-200 duration-200">
            <div className="relative mb-7">
              <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold indent-5">
                Web 3.0
                <br />
                Consultation
              </h2>
              <img
                src="/img/tmt-services/consult.png"
                alt="consult"
                className=""
              />
            </div>
            <p>
              Web 3.0 Consultation Embark on your Web 3.0 journey with
              confidence.Our experts provide insights, strategies, and roadmaps
              to help you harness the full power of emerging technologies.
            </p>
          </div>
          <div className="hover:brightness-200 duration-200">
            <div className="relative mb-7">
              <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold -indent-2">
                Web Design & <br />
                Devlopment
              </h2>
              <img
                src="/img/tmt-services/webdev.png"
                alt="consult"
                className=""
              />
            </div>
            <p>
              Web Design & Development Our creative wizards craft visually
              stunning websites that seamlessly merge aesthetics with
              functionality. We design with the future in mind, ensuring the
              site is responsive and intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
