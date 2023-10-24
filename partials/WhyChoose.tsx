/* eslint-disable @next/next/no-img-element */
"use client";
import TMTHeader from "@/components/TMTHeader";
import { useEffect, useState, useRef } from "react";
import React from "react";

function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  // const componentRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    setIsVisible(true);
  }, []);


  const whyChoose = [
    {
      title: "Expertise",
      body: "Our team consists of visionary designers, developers, blockchain experts, and consultants who are passionate about shaping the future of the internet.",
    },
    {
      title: "Innovation",
      body: "We stay ahead by embracing the latest technologies and trends in the Web 3.0 ecosystem. Your projects will always be at the forefront of innovation.",
    },
    {
      title: "Collaboration",
      body: "We believe in a collaborative approach, working closely with you to understand your vision and translate it into impactful digital solutions.",
    },
    {
      title: "Security",
      body: "With decentralized systems come unique security challenges. Our focus on security ensures your digital assets and projects are protected.",
    },
    {
      title: "Results",
      body: "We measure our success by the success of our clients. Your achievements in the decentralized landscape drive us to continuously deliver excellence.",
    },
  ];

  return (
    <section className="bg-violet-500 bg-cover md:h-fit w-full flex items-center justify-center">
      {/* Full Section */}
      <div className="flex flex-col gap-12 md:mx-56 mx-10 mb-14 md:mt-24 mt-10">
        {/* heading + image  */}
        <div className="flex flex-row w-fit">
          {/* <TMTHeader>Why choose TMT Labs?</TMTHeader> */}
          <span className="flex md:flex-row flex-col items-center md:gap-20 gap-3">
            <TMTHeader>Why choose TMT Labs?</TMTHeader>
            <img
              src="/img/header-icon/WhyChoose-header.png"
              alt="header"
              width="350px"
            />
          </span>
          {/* <img src="/img/why_choose/line-graphic.png" alt="" width="447px" height="25px"/> */}
        </div>
        {/* bulb image + why_choose */}
        <div className="flex md:flex-row flex-col gap-10">
          <div className={`${isVisible ? 'slide-in' : ''}`}>
            <img
              src="/img/why_choose/lightbulb.png"
              alt="???"
              // width="265px"
              // height="483px"
              className="rounded-3xl w-[365px]"
            />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-6">
            {whyChoose.map((item, index) => (
              <div className="md:w-40" key={`${item.title}-${index}`}>
                <img
                  src={`/img/why_choose/${item.title.toLocaleLowerCase()}.png`}
                  alt="icon"
                  className="mb-4"
                />
                <h2 className="text-black font-bold text-2xl mb-2">{item.title}:</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;


// /* <div className="w-52">
//             <img src="/img/why_choose/expertise.png" alt="" />
//             <h2 className="text-black font-bold text-2xl">Expertise:</h2>
//             <p>
//               Our team consists of visionary designers, developers, blockchain experts, and
//               consultants who are passionate about shaping the future of the internet.
//             </p>
//           </div>
//           <div className="w-52">
//             <img src="/img/why_choose/expertise.png" alt="" />
//             <h2 className="text-black font-bold text-2xl">Expertise:</h2>
//             <p>
//               Our team consists of visionary designers, developers, blockchain experts, and
//               consultants who are passionate about shaping the future of the internet.
//             </p>
//           </div>
//           <div className="w-52">
//             <img src="/img/why_choose/expertise.png" alt="" />
//             <h2 className="text-black font-bold text-2xl">Expertise:</h2>
//             <p>
//               Our team consists of visionary designers, developers, blockchain experts, and
//               consultants who are passionate about shaping the future of the internet.
//             </p>
//           </div>
//           <div className="w-52">
//             <img src="/img/why_choose/expertise.png" alt="" />
//             <h2 className="text-black font-bold text-2xl">Expertise:</h2>
//             <p>
//               Our team consists of visionary designers, developers, blockchain experts, and
//               consultants who are passionate about shaping the future of the internet.
//             </p>
//           </div>
//           <div className="w-52">
//             <img src="/img/why_choose/expertise.png" alt="" />
//             <h2 className="text-black font-bold text-2xl">Expertise:</h2>
//             <p>
//               Our team consists of visionary designers, developers, blockchain experts, and
//               consultants who are passionate about shaping the future of the internet.
//             </p>
//           </div>
//           <div className="w-52">
//             <img src="/img/why_choose/expertise.png" alt="" />
//             <h2 className="text-black font-bold text-2xl">Expertise:</h2>
//             <p>
//               Our team consists of visionary designers, developers, blockchain experts, and
//               consultants who are passionate about shaping the future of the internet.
//             </p>
//           </div> 
