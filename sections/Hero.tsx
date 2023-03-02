"use client";

import React from "react";

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';


function Hero() {
  return (
    <motion.div 
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.25}}
      className="flex flex-col items-center max-w-[1280px] justify-center mx-auto">
      {/* 文字 */}
      <div className="md:px-16 w-full text-center  lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase relative">
        <motion.p variants={textVariant(1.1)}  className="md:text-9xl font-extrabold pt-16 text-white">
          METAVERSE
        </motion.p>
        <motion.div variants={textVariant(1.2)} className=" inline-flex md:text-9xl font-extrabold text-white items-center md:py-4 py-2">
          <span className=" text-white">MA</span>
          <p className="m-0 p-0 md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white" />
          <span className="">NESS</span>
        </motion.div>
      </div>
      {/* 图片 */}
      <motion.div 
         variants={slideIn('right', 'tween', 0.2, 1)}
         className="md:px-16 min-h-[550px] sm:pl-8  relative w-full">
        <div className="absolute mr-16 bg-gradient-to-br from-purple-900 via-teal-500 to-purple-600 p-5 w-full h-[300px] z-0 rounded-tl-[140px] -top-[30px]" />
        <div className="m-0 absolute z-10 w-full">
          <img
            src="/cover.png"
            alt="hero"
            className="w-full sm:h-[500px] h-[350px] object-content rounded-tl-[140px] z-10 relative"
          />
          <a href="#explore" className=" absolute right-56 -bottom-16 pr-8">
            <div className="w-full flex justify-end  relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
