/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  colour: string;
  imageName: string;
  name: string;
  points: string[];
}

const ServiceCard = ({ colour, imageName, name, points }: Props) => {
  // Setting the li icon style for each service card
  // const css = `.service-card ul.${colour} li:before { color: ${colourCode}; }`;

  return (
    <div>
      <div className="hover:brightness-200 duration-200 relative mb-7">
        <h3
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-${colour}`}
        >
          {name}
        </h3>
        <img
          src={`/img/tmt-services/${imageName}.png`}
          alt={`TMT Labs ${name} Service`}
        />
      </div>
      {/* <style>{css}</style> */}
      <ul className={`text-${colour}`}>
        {points.map((point, index) => (
          <li
            className={`before:content-['+'] before:text-[${colour}] text-[${colour}]`}
            key={`${name}-${index}`}
          >
            {<span className="text-white"> {point} </span>}
            {/* {point} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
