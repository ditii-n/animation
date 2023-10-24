import React from "react";

interface Props {
  name: string;
  imageName: string;
  type: "partner" | "project";
  link?: boolean;
  linkUrl?: string;
}

const PartnerCard = ({ name, imageName, type, link = false, linkUrl }: Props) => {
  let imageUrl = "";
  if (type === "partner") {
    imageUrl = `/img/partner/${imageName}.jpg`;
  } else if (type === "project") {
    imageUrl = `/img/project/${imageName}.jpg`;
  } else {
    imageUrl = `/img/project/icon100/png`;
  }

  return (
    <div className={`partner-card`}>
      {link ? (
        <a href={linkUrl} target="_blank" rel="noreferrer">
          <img src={imageUrl} alt={`Partner ${name}`} />
        </a>
      ) : (
        <img src={imageUrl} alt={`Partner ${name}`} />
      )}
    </div>
  );
};

export default PartnerCard;
