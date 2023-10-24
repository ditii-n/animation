import React from "react";
import PartnerCard from "../components/Partner/PartnerCard";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="content">
        <h2 className="title">Projects</h2>
        <p>The projects we are actively part of</p>
        <div className="partner-cards">
          <PartnerCard
            name="The Cupcakery"
            imageName="thecupcakery"
            type="project"
            link
            linkUrl="https://thecupcakerynft.com"
          />
          <PartnerCard
            name="Dubai Peeps"
            imageName="dubaipeeps"
            type="project"
            link
            linkUrl="https://www.dubaipeeps.com"
          />
          <PartnerCard
            name="Beyond Power"
            imageName="beyondpower"
            type="project"
            link
            linkUrl="https://www.beyondpower.io/"
          />
          {/* <PartnerCard name="Samurai 2088" imageName="samurai2088" type="project" /> */}
        </div>
      </div>
    </section>
  );
}
