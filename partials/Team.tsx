/* eslint-disable @next/next/no-img-element */
import React from "react";
import TeamCard from "../components/Team/TeamCard";
import TMTHeader from "@/components/TMTHeader";

export default function Team() {
  const team = [
    {
      name: "TJ",
      imageName: "TJ",
      title: "Co-founder",
      // subtitle: "Tech",
      description: "Tech Lead",
      twitter: "tanujdamani",
      insta: "tanujdamani",
      linkedin: "tanujdamani",
      ethereum: "tanujd.eth",
    },
    {
      name: "Manolia",
      imageName: "md",
      title: "Co-founder",
      // subtitle: "Creative",
      description: "Creative Lead",
      twitter: "md_apostrophe",
      insta: "md.apostrophe",
      linkedin: "manoliadsouza",
      ethereum: "mdapostrophe.eth",
    },
    {
      name: "Tanvi",
      imageName: "td",
      title: "Co-founder",
      // subtitle: "Community",
      description: "Discord Architect",
      twitter: "tanvidamani",
      linkedin: "tanvidamani",
      ethereum: "tanvid.eth",
    },
  ];

  return (
    <section id="team" className="bg-cover w-full h-fit">
      <div className="h-full min-w-fit flex flex-col items-center justify-center md:mb-[10vh] mt-14 mb-5">
        <div className="w-fit">
          {/* <h2 className="text-3xl font-bold text-start my-3">Meet the team</h2> */}
          <span className="flex md:flex-row flex-col items-center md:gap-20 gap-3 mx-5">
            <TMTHeader>Meet the team</TMTHeader>
            <img
              src="/img/header-icon/Services-header.png"
              alt="header"
              // width="350px"
            />
          </span>
          <p className="my-5 mx-5">Meet the scientists behind TMT Labs</p>
          <div className="flex flex-wrap w-full justify-center gap-x-20 gap-y-5 mt-10">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
