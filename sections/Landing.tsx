"use client";

import useMediaQuery from "@/utils/hooks/useMediaQuery";
import React from "react";

function Landing() {
  const isAboutLarger = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="gap-8 py-10 md:flex md:items-center md:justify-center">
      {/* Image man */}
      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32">
        {isAboutLarger ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:z-[-1]
          before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue md:before:max-w-[600px]"
          >
            <img
              className="z-10 w-full max-w-[400px] transition duration-500 hover:saturate-200 hover:filter md:max-w-[600px]"
              src="assets/profile-image.png"
              alt=""
            />
          </div>
        ) : (
          <img
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
            alt=""
          />
        )}
      </div>

      {/* Main Text */}
      <div className="z-20 mt-12 basis-2/5 md:mt-32">
        <p className="z-10 text-center font-playfair text-6xl md:text-start">
          Jane {""}
          <span
            className="z-20 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]
              xs:relative xs:font-semibold xs:text-deep-blue xs:before:content-brush"
          >
            Esper
          </span>
        </p>
        <p className="mt-10 mb-7 text-center text-sm md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          eveniet impedit distinctio ratione unde, beatae doloribus ex molestias
          quam culpa ab odit, sapiente atque natus quibusdam fuga eligendi
          maiores quia.
        </p>
        <div className="flex gap-0">
          <button className="rounded-sm bg-gradient-rainbow py-3 px-7 font-semibold text-deep-blue transition duration-500 hover:bg-blue hover:text-white">
            Contact Me
          </button>
          <button className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 ">
            <div className="flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red">
              Let&apos;s talk.
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
