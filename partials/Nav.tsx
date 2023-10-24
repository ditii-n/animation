/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import TMTLogo from "../components/TMTLogo";
import li from "module";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full absolute top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <TMTLogo />
            {/* Responsive code */}
            {/* ================================================================================================= */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <img src="/img/close.svg" alt="close" />
                ) : (
                  <img src="/img/hamburger-menu.svg" alt="Menu" />
                )}
              </button>
            </div>
            {/* =================================================================================================== */}
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 md:bg-transparent bg-slate-600 ${navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-l text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#about">About</Link>
              </li>
              <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#blog">Services</Link>
              </li>
              <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#contact">Why TMT Labs</Link>
              </li>
              <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#projects">Team</Link>
              </li>
              <li className="pb-6 text-l text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <button className="px-4 py-1 font-medium cursor-pointer border-solid border border-cyan-300 rounded-full text-cyan-300 hover:bg-cyan-300 hover:text-white active:bg-cyan-400 w-fit">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
