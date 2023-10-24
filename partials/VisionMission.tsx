/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState, useRef } from "react";
import React from "react";
// import IntersectionObserver from "intersection-observer";


const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const componentRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    setIsVisible(true);
  }, []);


  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.unobserve(componentRef.current!);
  //       }
  //     });
  //   },
  //     { threshold: 0.5 }
  //   );
  //   if (componentRef.current) {
  //     observer.observe(componentRef.current);
  //   }

  //   return () => {
  //     if (componentRef.current) {
  //       observer.unobserve(componentRef.current);
  //     }
  //   };
  // }, []);



  return (
    <section
      id="vision"
      className="bg-teal-300 bg-cover md:h-screen h-fit w-full"
    >
      <div className="h-full flex flex-col items-center md:justify-center md:gap-10 mx-5">
        <h1 className="text-center text-black md:text-3xl text-xl font-bold mt-5">
          At TMT Labs, we're not just a web design and devlopment agency;
          <br />
          we're your gateway to the next era of the internet: Web 3.0.
        </h1>
        <div className="flex flex-col items-center justify-center md:gap-5 md:w-[70%] gap-5 mt-5">
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-5 gap-5">
            {/* <div ref={componentRef} className="bg-black flex flex-row items-center justify-center md:px-5 md:py-14 px-1 py-2 rounded-3xl gap-3"> */}
            <div className={`bg-black flex flex-row items-center justify-center md:px-5 md:py-14 px-1 py-2 rounded-3xl gap-3 ${isVisible ? 'slide-in' : ''}`}>
              <img
                src="/img/blockchain-icon.png"
                alt="blockchain-icon"
                className=""
              />
              <p className="">
                With a profound understanding of blockchain technology and its
                transformative potential, we have positioned ourselves as a
                one-stop destination for all things Web 3.0.
              </p>
            </div>
            <div className={`bg-black flex flex-row items-center justify-center md:px-5 md:py-14 px-1 py-2 rounded-3xl gap-3 ${isVisible ? 'slide-out' : ''}`}>
              <img src="/img/mission-icon.png" alt="" />
              <p className="">
                Our mission is to empower businesses, creators, and innovators
                to harness the true power of the decentralized internet and
                digital assets.
              </p>
            </div>
          </div>
          <div className={`bg-black flex flex-row items-center justify-center md:px-5 md:py-14 px-1 py-2 rounded-3xl mb-5 ${isVisible ? 'slide-up' : ''}`}>
            <img src="/img/person-icon.png" alt="" />
            <p className="">
              With a team of skilled developers, visionary designers, dedicated
              community managers and blockchain enthusiasts, we're here to
              transform your digital presence into an immersive and
              decentralized experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
