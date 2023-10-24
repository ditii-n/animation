/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

// interface TechStack{
//   Icons:string;
// }
const TechStack = () => {
  const Icons = [
    "ajman-municipality",
    "ajman-police",
    "alpha-plus",
    "asus",
    "betterhomes",
    "cxmmunity",
    // "dappunk",
    // "nbo",
    // "nexus",
    // "noon",
    // "samsung",
    // "sennheiser",
    // "sport360",
  ];

  return (
    <section className="bg-zinc-300 bg-cover min-h-fit md:w-full flex justify-center">
      <div className="flex flex-col  justify-center items-center mx-2 my-12 gap-12">
        <h1 className="text-white md:text-3xl text-2xl font-bold">
          Clients We've worked with
        </h1>
        <div className="flex flex-row items-center md:grid-cols-7 gap-14">
          {Icons.map((icon, index) => (
            <img
              src={`/img/clients-icon/${icon}.png`}
              alt={icon}
              key={`${icon}-${index}`}
              className="md:grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
