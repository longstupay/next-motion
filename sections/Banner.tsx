"use client";

import React from "react";

const ButtonCls = "bg-[#000] text-white px-4 py-2 rounded-lg font-bold";

function Banner() {
  return (
    <section className="bg-[#EFFFFA]  ">
      <div className="w-full min-h-[350px] rounded-lg flex flex-col lg:flex-row items-center justify-center p-2">
        <div className="flex-[0.5] space-y-4 flex flex-col">
          <p className="text-5xl font-extrabold">Design focused</p>
          <p className="text-5xl font-extrabold">Startup,forstartups.</p>
          <p className="w-full lg:pr-48">
            When, while lovely valley teems with vapor around meand meridian sun
            strikes the upper impenetrable.
          </p>
          <div className="space-x-4">
            <button className={ButtonCls + ``}>
              Hire Me
              <span className="w-5 h-5 ml-2 inline-flex items-center justify-center rounded-full bg-green-400 text-black">
                &gt;
              </span>
            </button>
            <button className="text-black px-4 py-2 rounded-lg font-bold bg-[#fff] border border-gray-400">
              Live Chat
            </button>
          </div>
          <div className="space-y-2">
            <p className="font-bold">64+ Reviews</p>
            <div id="5star" className="text-yellow-400 inline-flex space-x-2">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="w-8 h-8 inline-flex justify-center items-center bg-green-400 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 fill-current text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <p>More then 50+ people taking services.</p>
          </div>
        </div>
        {/* hero img */}
        <div className="flex-[0.4]">
          <img className="object-cover" src="bg.png" alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
