/* eslint-disable @next/next/no-img-element */
import React from "react";

// interface TechStack{
//   Icons:string;
// }
const TechStack = () => {
  const Icons = [
    "alchemy",
    "dart",
    "ethereum",
    "etherjs",
    "expressjs",
    "flutter",
    "hardhat",
    "mongodb",
    "nextjs",
    "polygon",
    "react",
    "solidity",
    "web3js",
  ];

  return (
    <section className="bg-zinc-300 bg-cover min-h-fit w-full flex justify-center">
      <div className="flex flex-col justify-center items-center mx-2 my-12 gap-12">
        <h1 className="text-white md:text-3xl text-2xl font-bold">
          Technologies we work with
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-14">
          {Icons.map((icon, index) => (
            <img
              src={`/img/tech_stack/${icon}.jpg`}
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
