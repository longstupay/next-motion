"use client";

import React from "react";
import {
  EnvelopeIcon,
  BellAlertIcon,
  CreditCardIcon,
  RectangleGroupIcon,
  AcademicCapIcon,
  IdentificationIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const svgIconCls = " w-12 h-12 rounded-lg flex items-center justify-center";

const servicesIconObj = [
  {
    icon: (
      <div className={svgIconCls + " bg-green-100"}>
        <EnvelopeIcon className="w-6 h-6 text-green-500" />
      </div>
    ),
    text: "Ui/Ux Design",
    text2: "For Mobile & Web",
  },
  {
    icon: (
      <div className={svgIconCls + " bg-violet-100"}>
        <BellAlertIcon className="w-6 h-6 text-violet-500" />
      </div>
    ),
    text: "Social Media Marketing",
    text2: "App Development",
  },
  {
    icon: (
      <div className={svgIconCls + " bg-yellow-100"}>
        <CreditCardIcon className="w-6 h-6 text-yellow-500" />
      </div>
    ),
    text: "Pay Per Click",
    text2: "(Flat, 3d & More)",
  },
  {
    icon: (
      <div className={svgIconCls + " bg-pink-100"}>
        <RectangleGroupIcon className="w-6 h-6 text-pink-500" />
      </div>
    ),
    text: "Content Marketing",
    text2: "Management",
  },
  {
    icon: (
      <div className={svgIconCls + " bg-blue-100"}>
        <AcademicCapIcon className="w-6 h-6 text-blue-500" />
      </div>
    ),
    text: "Custome Static Website",
    text2: "Design & Dev.",
  },
  {
    icon: (
      <div className={svgIconCls + " bg-red-100"}>
        <IdentificationIcon className="w-6 h-6 text-red-500" />
      </div>
    ),
    text: "Branding",
    text2: "& Management",
  },
  {
    icon: (
      <div className={svgIconCls + " bg-orange-100"}>
        <ArrowTrendingUpIcon className="w-6 h-6 text-orange-500" />
      </div>
    ),
    text: "Digital Marketing",
    text2: "(Logo & Packaging)",
  },
];

function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicesIconObj.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-start space-y-8 pt-16 pb-8 px-8 bg-white rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.text}</h3>
              <h3 className="text-lg font-semibold">{item.text2}</h3>
            </div>
            <span className="text-green-500 mt-4">Learn More</span>
          </div>
        ))}
        <div className="bg-black relative flex flex-col justify-center items-center rounded-lg pl-8 text-white">
          <img src={"line.png"} alt="line" className="absolute right-8 top-0 object-cover h-32" />
          <div className="text-4xl w-full text-left leading-loose font-extrabold mx-auto">
            +4 <br />
            More...
          </div>
          <div className="mt-8 w-full text-left text-lg text-green-300">
            View More...
            <button className="ml-8 rounded-lg w-12 h-12 bg-green-400 text-white">&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
