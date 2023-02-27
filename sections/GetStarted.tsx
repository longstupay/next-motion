"use client";

import React from "react";
import { motion } from "framer-motion";
import { planetVariants } from "@/utils/motion";
import styles from "@/styles";

function GetStarted() {
  return (
    <section className="min-h-[560px]">
      <div className="flex justify-center md:mx-32">
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div className="flex-[0.75] flex md:px-16 px-8">
          <div className="flex flex-col justify-between">
            <p className="pt-4 md:pt-8 text-gray-100">| How Metaversus Works</p>
            <p className="flex-[0.3] leading-relaxed py-8 md:text-6xl font-extrabold text-white">
              Get started with just a few clicks
            </p>
            <ul className="flex-1 flex flex-col gap-4 md:gap-16">
              <li className="flex items-center">
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
                >
                  <p className="font-bold md:px-16 text-[20px] text-white">1</p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  Find a world that suits you and you want to enter
                </p>
              </li>
              <li className="flex items-center">
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
                >
                  <p className="font-bold text-[20px] text-white">2</p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  Enter the world by reading basmalah to be safe
                </p>
              </li>
              <li className="flex items-center">
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
                >
                  <p className="font-bold text-[20px] text-white">2</p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  No need to beat around the bush, just stay on the gas and have
                  fun
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GetStarted;
