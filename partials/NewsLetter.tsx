/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-cover bg-white md:min-h-fit w-full flex flex-col justify-center relative">
      <img
        src="/img/icon-large.png"
        alt="icon"
        width="129px"
        height="504px"
        className="absolute left-14 top-0 rotate-45 animate-spin"
      />
      <img
        src="/img/icon-large.png"
        alt="icon"
        width="129px"
        height="504px"
        className="absolute right-14 -rotate-45 animate-spin"
      />
      <div className="flex flex-col h-fit justify-center items-center gap-8 mt-[8vh] mb-[20vh]">
        <h1 className="text-black text-center md:text-3xl text-2xl">
          Join us on the journey to redefine the web for the modern age. <br />
          Together, we'll create, innovate, and lead in the exciting world of
          Web 3.0.
        </h1>
        <h1 className="text-black text-center md:text-3xl text-xl font-bold">
          Contact TMT Labs today to embark on a <br /> new era of digital
          possibilities.
        </h1>
        <button className="text-red-500 px-9 py-2 font-bold cursor-pointer border-solid border-2 border-red-600 rounded-full hover:bg-red-600 hover:text-white active:bg-white w-fit">
          Get in touch
        </button>
      </div>

      <div className="md:w-9/12 w-11/12 flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-col justify-center items-center absolute -bottom-14 inset-x-0 mx-auto rounded-[2.5rem]">
        <h1 className="text-center md:text-3xl text-lg font-bold md:my-12 md:mx-48 my-6 mx-20">
          Subscribe to the TMT Labs Newsletter
        </h1>
        <div className="flex flex-row mb-5">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="md:w-[70vh] max-w-screen-md bg-transparent border-white border-2 rounded-l-xl"
          />
          <button
            type="button"
            className="text-black md:px-9 md:py-2 px-4 py-1 font-bold cursor-pointer border-solid border-2 border-white rounded-2 bg-white w-fit rounded-xl"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
