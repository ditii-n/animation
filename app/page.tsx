import type { NextPage } from "next";
import Team from "../partials/Team";
import Footer from "../partials/Footer";
import Hero from "../partials/Hero";
import Nav from "../partials/Nav";
import styles from "../styles/Home.module.css";
import Projects from "../partials/Projects";
import Services from "../partials/Services";
import ServiceFooter from "../partials/ServiceFooter";
import VisionMission from "../partials/VisionMission";
import TechStack from "../partials/TechStack";
import WhyChoose from "../partials/WhyChoose";
import NewsLetter from "../partials/NewsLetter";
import Clients from "../partials/Clients";
import TMTIconLink from "../components/TMTIconLink";
import Link from "next/link";
// import ContactUs from "../partials/ContactUs";

const Home: NextPage = () => {
  const linkIcons = [
    {
      name: "email",
      link: "mailto:info@tmtlabs.xyz",
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
  ] as const;

  return (
    <div>
      <Nav />
      <Hero />
      <VisionMission />
      {/* <main className={styles.main}> */}
      <Services />
      {/* <ServiceFooter /> */}
      <TechStack />

      <WhyChoose />
      {/* <Clients/> */}
      <Team />

      {/* <Projects /> */}
      {/* <ContactUs /> */}

      {/* <section
        id="contact"
        className="bg-cover min-h-fit w-full flex justify-center"
      >
        <div className="content">
          <h2 className="title">Connect with us</h2>
          <p>Get in touch with us on any of the following channels:</p>
          <div className="tempLinks">
            <div className="icons">
              {linkIcons.map((lIcon, i) => (
                <TMTIconLink
                  key={`l-icon-${i}`}
                  className="icon"
                  name={`${lIcon.name}`}
                  link={lIcon.link}
                />
              ))}
            </div>
            <div className="">
              Or{" "}
              <Link href="/form" passHref>
                fill this form
              </Link>{" "}
              and we&apos;ll get back to you.
            </div>
          </div>
        </div>
      </section> */}

      <NewsLetter />
      <Footer />
      {/* </main> */}
    </div>
  );
};

export default Home;
