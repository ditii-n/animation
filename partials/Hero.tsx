/* eslint-disable @next/next/no-img-element */
import React from "react";
import TMTIconLink from "../components/TMTIconLink";
// import thickGradLine from "../img/thickGradLine.png";
// public\img\thickGradLine.png

export default function Hero() {
  return (
    <section id="hero" className="relative bg-hero bg-cover h-screen w-full overflow-hidden">
      <div className="h-full min-w-fit flex flex-col gap-5 md:gap-10 mx-10 md:mx-0 items-center justify-center">
        {/* Left Animation */}
        <>
          <img
            src="/img/thickGradLine.png"
            className="absolute left-5 bottom-0 animate-meteor invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thinLongLine.png"
            className="absolute left-2 lg:left-14 bottom-1 animate-meteor-b"
            alt="gradient-line"
          />
          <img
            src="/img/thinLongLine.png"
            className="absolute left-24 top-1 animate-meteor invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thickGradLine.png"
            className="absolute left-36 bottom-28 animate-meteor-c invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thinShortLine.png"
            className="absolute left-5 lg:left-48 bottom-0 animate-meteor-b "
            alt="gradient-line"
          />
          <img
            src="/img/thinLongLine.png"
            className="absolute left-56 top-8 animate-meteor-c invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thinShortLine.png"
            className="absolute left-9 lg:left-64 animate-meteor"
            alt="gradient-line"
          />
        </>

        {/* Right Animation */}
        <>
          <img
            src="/img/thickGradLine.png"
            className="absolute right-5 bottom-0 animate-meteor invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thinLongLine.png"
            className="absolute right-8 lg:right-14 bottom-1 animate-meteor-b"
            alt="gradient-line"
          />
          <img
            src="/img/thinLongLine.png"
            className="absolute right-24 bottom-3 top-1 animate-meteor-c invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thickGradLine.png"
            className="absolute right-36 bottom-1 animate-meteor-c invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thinShortLine.png"
            className="absolute right-2 lg:right-48 bottom-0 animate-meteor-b"
            alt="gradient-line"
          />
          <img
            src="/img/thinLongLine.png"
            className="absolute right-56 top-8 animate-meteor-c invisible lg:visible"
            alt="gradient-line"
          />
          <img
            src="/img/thinShortLine.png"
            className="absolute right-5 lg:right-64 animate-meteor"
            alt="gradient-line"
          />
        </>

        <h1 className="max-w-5xl text-4xl md:text-7xl text-center uppercase w-fit">
          Making Your Web 3.0 Dreams A Reality
        </h1>
        <p className="text-center font-semibold md:text-xl md:leading-10 w-fit">
          <span className="text-cyan-300">Embrace the Future with TMT labs:</span>
          <br />
          Elevate Your Digital Presence With Cutting-Edge Solutions
        </p>
        <button className="px-9 py-2 font-bold cursor-pointer border-solid border-2 border-cyan-300 rounded-full text-cyan-300 hover:bg-cyan-300 hover:text-white active:bg-cyan-400 w-fit">
          Get in Touch
        </button>

        <div className="flex gap-4 pt-9 w-fit absolute bottom-12">
          <TMTIconLink className="" name="twitter" link="https://twitter.com/tmtlabs" />
          <TMTIconLink className="" name="instagram" link="https://instagram.com/tmtlabs.x" />
          <TMTIconLink className="" name="medium" link="https://tmtlabs.medium.com/" />
        </div>
      </div>
      {/* <div className="mx-auto my-0 flex flex-col">
        <p className="mx-auto my-auto px-1 py-1 font-bold text-cyan-300">
          Embrace the Future with TMT labs:
        </p>
        <p className="mx-auto my-auto px-1 py-1 font-bold">
          Elevate Your Digital Presence with cutting-Edge Solutions
        </p>
        <button className="mx-auto my-4 px-6 py-2 cursor-pointer bg-transparent border-solid border-2 border-cyan-300 rounded-full text-cyan-300">
          Get in Touch
        </button>
      </div> */}
      {/* <div className="icons flex justify-center">
        <TMTIconLink
          className="icon"
          name="twitter"
          link="https://twitter.com/tmtlabs"
        />
        <TMTIconLink
          className="icon"
          name="instagram"
          link="https://instagram.com/tmtlabs.x"
        />
        <TMTIconLink
          className="icon"
          name="medium"
          link="https://tmtlabs.medium.com/"
        />
      </div> */}
    </section>
  );
}
