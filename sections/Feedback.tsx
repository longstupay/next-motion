"use client";

import React from "react";

export default function Feedback() {
  return (
    <section>
      <div className="relative flex flex-col mt-8 md:my-16 md:flex-row md:px-16 p-8 mx-auto">
      <div className="feedback-gradient" />
        <div className="flex-[0.35] min-h-[350px] md:ml-16 pl-8 border rounded-3xl">
          <p className="mt-32 text-white font-extrabold text-3xl">Samantha</p>
          <p className="mt-2 text-gray-100 text-xl">Founder Metaverus</p>
          <p className="mt-8 text-white leading-loose text-2xl pr-14">
            “With the development of today&lsquo;s technology, metaverse is very
            useful for today&lsquo;s work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </div>
        <div className="relative flex-1 min-h-[350px] flex flex-col md:flex-col justify-center items-center md:pl-8 md:pr-32">
          <img
            src="/planet-09.png"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <div
          className="lg:block hidden absolute -left-[6%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
