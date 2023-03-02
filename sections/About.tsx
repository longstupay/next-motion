"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textContainer,
  textVariant2,
} from "../utils/motion";

function About() {
  return (
    <section className="min-h-[320px] text-center md:px-32 sm:px-8 pt-8 mt-8">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.p variants={textContainer} className="text-white">
          {Array.from("| About Metaversus").map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.p 
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-3xl md:mx-4 md:px-8 px-4 text-gray-200 leading-relaxed">
          <span className=" font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it&apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the madness of the metaverse
          of today, using only VR devices you can easily explore the metaverse
          world you want, turn your dreams into reality. Let&apos;s explore the
          madness of the metaverse by scrolling down
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px] mx-auto"
        />
      </motion.div>
    </section>
  );
}

export default About;
