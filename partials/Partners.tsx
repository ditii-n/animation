import React from "react";
import PartnerCard from "../components/Partner/PartnerCard";

export default function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="content">
        <h2 className="title">Partners</h2>
        <p>The amazing partners we work with to make the NFT space a better place</p>
        <div className="partner-cards">
          <PartnerCard name="partner" imageName="project" type="partner" />
          <PartnerCard name="partner" imageName="project" type="partner" />
          <PartnerCard name="partner" imageName="project" type="partner" />
        </div>
      </div>
    </section>
  );
}
