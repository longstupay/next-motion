"use client";

import { bannerVar, lastName, stagger, star } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { nanoid } from "nanoid";

const ButtonCls = "bg-[#000] text-white px-4 py-2 rounded-lg font-bold";

const NameStaggerVar = {
  initial: {
    y: 20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 2.4,
    },
  }
};


const letter = {
  initial: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1.6,
      type: "tween",
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 4.6,
      type: "tween",
     },
  },
};

const NameMotion = ({ name, cls }: { name: string; cls?: string }) => {
  return (
    <motion.p
      initial={{ opacity: 0,y:100 }}
      animate={{ opacity: 1,y:0}}
      className={cls+ ` `}
      id="nameVTN"
    >
      {Array.from(name).map((char, i) => (
        <motion.span
          initial={{ y:-80,opacity:0}}
          animate={{ y:0,opacity:1 , transition: { delay:i*0.03, duration:1.3,ease:"easeIn"} }}
          key={nanoid()}
          className=" inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

function Banner() {
  return (
    <motion.section variants={bannerVar} className="bg-[#EFFFFA]  ">
      <div className="w-full min-h-[350px] rounded-lg flex flex-col lg:flex-row items-center justify-center p-2">
        <motion.div
          className="flex-[0.5] space-y-4 flex flex-col"
        >
          {/* <p className="text-5xl font-extrabold">Design focused</p> */}
          {/* <p className="text-5xl font-extrabold">Startup,forstartups.</p> */}
          <motion.div variants={stagger}><NameMotion name="Design focused" cls="text-5xl font-extrabold" /></motion.div>
          {/* <NameMotion name="Startup,forstartups." cls="text-5xl font-extrabold"/> */}
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
          <motion.div variants={stagger} className="space-y-2">
            <motion.p variants={star} className="font-bold">
              64+ Reviews
            </motion.p>
            <motion.div
              variants={lastName}
              initial="hidden"
              animate="show"
              id="5star"
              className="text-yellow-400 inline-flex space-x-2"
            >
              {[1, 2, 3, 4, 5].map((item, index) => (
                <motion.div
                  variants={star}
                  key={index}
                  className="w-8 h-8 inline-flex justify-center items-center bg-green-400 rounded-lg"
                >
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
                </motion.div>
              ))}
            </motion.div>
            <motion.p variants={star}>
              More then 50+ people taking services.
            </motion.p>
          </motion.div>
        </motion.div>
        {/* hero img */}
        <div className="flex-[0.4]">
          <img className="object-cover" src="bg.png" alt="hero" />
        </div>
      </div>
    </motion.section>
  );
}

export default Banner;
