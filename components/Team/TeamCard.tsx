import React from "react";
import TMTIconLink from "../TMTIconLink";

interface Props {
  name: string;
  imageName: string;
  title: string;
  // subtitle: string;
  description: string;
  ethereum?: string;
  twitter?: string;
  insta?: string;
  linkedin?: string;
}

/* #######################

TODO: Card Style

Image is background
Image will be b/w by default
On Hover it will have a color tinge (implemented via code or as an image?)

####################### */

const TeamCard = ({
  name,
  imageName,
  title,
  // subtitle,
  description,
  ethereum,
  twitter,
  insta,
  linkedin,
}: Props) => {
  const style = {
    backgroundImage: `url(/img/team/${imageName}.png)`,
  };

  return (
    <div>
      <div
        className={`rounded-full min-w-[300px] h-[25rem] p-[1rem] bg-center bg-cover bg-blend-hard-light ${title} grayscale hover:grayscale-0`}
        style={style}
      >
        {/* <h2>{name}</h2>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{description}</p>
      <div className="flex justify-start w-full mx-2.5 gap-x-[1rem]">
        {twitter ? (
          <TMTIconLink name="twitter" link={`https://twitter.com/${twitter}`} />
        ) : null}
        {insta ? (
          <TMTIconLink
            name="instagram"
            link={`https://instagram.com/${insta}`}
          />
        ) : null}
        {linkedin ? (
          <TMTIconLink
            name="linkedin"
            link={`https://linkedin.com/in/${linkedin}`}
          />
        ) : null}
        {ethereum ? (
          <TMTIconLink
            name="ethereum"
            link={`https://etherscan.io/address/${ethereum}`}
          />
        ) : null}
      </div> */}
      </div>
      <div className="flex flex-col justify-center items-center mt-6 gap-1">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>{title}</p>
        {/* <p>{subtitle}</p> */}
        <p>{description}</p>
        <div className="flex justify-center w-full mx-2.5 gap-x-[1rem]">
          {twitter ? <TMTIconLink name="twitter" link={`https://twitter.com/${twitter}`} /> : null}
          {insta ? <TMTIconLink name="instagram" link={`https://instagram.com/${insta}`} /> : null}
          {linkedin ? (
            <TMTIconLink name="linkedin" link={`https://linkedin.com/in/${linkedin}`} />
          ) : null}
          {ethereum ? (
            <TMTIconLink name="ethereum" link={`https://etherscan.io/address/${ethereum}`} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
